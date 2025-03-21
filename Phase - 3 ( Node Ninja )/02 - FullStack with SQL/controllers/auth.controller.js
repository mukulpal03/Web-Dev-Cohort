import { PrismaClient } from "@prisma/client";
import crypto from "crypto"
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { error } from "console";

const prisma = new PrismaClient().$extends({
    query: {
        user: {
            async create ({args, query}) {
                if(args.data.password) {
                    args.data.password = await bcrypt.hash(args.data.password, 10)
                }
                return query(args)
            },
            async update ({args, query}) {
                if(args.data.password) {
                    args.data.password = await bcrypt.hash(args.data.password, 10)
                }
                return query(args)
            }
        }
    }
})

const registerUser = async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(401).json({
            message: "All fields are required"
        })
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: {email}
        })

        if(existingUser) {
            return res.status(401).json({
                message: "User already exists"
            })
        }

        const user = await prisma.user.create({
            data: {
                name, 
                email,
                password
            }
        })

        if(!user) {
            return res.status(401).json({
                message: "User is not registered"
            })
        }

        const token = crypto.randomBytes(32).toString('hex');

        await prisma.user.update({
            where: {email},
            data: {
                verificationToken: token
            }
        })

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USER,
              pass: process.env.MAILTRAP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "Verify your email",
            text: `Pleas verify by clicking on this following link
            ${process.env.BASE_URL}/api/v1/users/verify/${token}
            `,
        }

        await transporter.sendMail(mailOptions)

        res.status(200).json({
            success: true,
            message: "User registered successfully"
        })

        
    } catch (err) {
        return res.status(401).json({
            message: "User registration failed",
            success: false,
            err: err.message
        })
    }
}

const verifyUser = async (req, res) => {
    const {token} = req.params

    if(!token) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                verificationToken: token
            }
        })
    
        if(!user) {
            return res.status(401).json({
                message: "User not verified"
            })
        }
    
        await prisma.user.update({
            where: {email: user.email},
            data: {
                isVerified: true,
                verificationToken: null
            }
        })
    
        res.status(200).json({
            success: true,
            message: "User verification successful"
        })
    } catch (error) {
        res.status(401).json({
            success: true,
            message: "User verification failed",
            error: error.message
        })
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        if(!name || !email || !password) {
            return res.status(401).json({
                message: "All fields are required"
            })
        }
    }

    try {
        const user = await prisma.user.findUnique({
            where: {email}
        })

        if(!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        if(!user.isVerified) {
            return res.status(401).json({
                message: "Please verify your email"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: '24h'
        })

        res.cookie('token', token, {
            httpOnly: true,
            secure: true
        })

        res.status(200).json({
            success: true,
            message: "User logged in successfully"
        })
    } catch (err) {
        return res.status(400).json({
            message: "User login failed",
            success: false,
            err: err.message
        })
    }
}

const getMe = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.user.id
            }
        })

        res.status(200).json({
            message: `Welcome, ${user.name}`,
            success: true
        })
    } catch (err) {
        res.status(401).json({
            message: "Some ERROR",
            success: false,
            err: err.message
        })
    }
}

const logoutUser = async (req, res) => {
    try {
        res.cookie('token', '', {expires: new Date(0)})

        res.status(200).json({
            success: true,
            message: "User logged out successfuly"
        })
    } catch (err) {
        res.status(400).json({
            success: true,
            message: "Some error occurred"
        })
    }
}

const forgotPassword = async (req, res) => {
    const {email} = req.body

    if(!email) {
        return res.status(401).json({
            message: "Please Provide an email"
        })
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!user) {
            return res.status(401).json({
                message: "Invalid email"
            })
        }

        if(!user.isVerified) {
            return res.status(401).json({
                message: "Please verify your email"
            })
        }

        const token = await crypto.randomBytes(32).toString('hex')

        await prisma.user.update({
            where: {email},
            data: {
                resetPasswordToken: token,
                resetPasswordExpiry: new Date(Date.now() + 10 * 60 * 1000)
            }
        })

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USER,
              pass: process.env.MAILTRAP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "Verify your email",
            text: `Pleas verify by clicking on this following link
            ${process.env.BASE_URL}/api/v1/users/reset-password/${token}
            `,
        }

        await transporter.sendMail(mailOptions)

        res.status(200).json({
            message: "Email Sent",
            success: true
        })

    } catch (err) {
        return res.status(401).json({
            message: "Some error occurred",
            success: false,
            error: err.message
        })
    }
}

const resetPassword = async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;

    if(!token) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }

    if(!password) {
        return res.status(401).json({
            message: "Please enter a password"
        })
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                resetPasswordToken: token,
                resetPasswordExpiry: {
                    gt: new Date()
                } 
            }
        })
    
        if(!user) {
            return res.status(401).json({
                message: "Token expired"
            })
        }

        await prisma.user.update({
            where: {email: user.email},
            data: {
                password,
                resetPasswordToken: null,
                resetPasswordExpiry: null
            }  
        })

        res.status(200).json({
            message: "Password Reset Successfully",
            success: true
        })
    } catch (error) {
        return res.status(200).json({
            message: "Password Reset Failed",
            success: false,
            error: error.message
        })
    }
}

export { registerUser, verifyUser, loginUser, getMe, logoutUser, forgotPassword, resetPassword }



