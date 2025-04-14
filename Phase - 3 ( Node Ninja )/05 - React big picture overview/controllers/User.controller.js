import User from "../models/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { error } from "console";

const registerUser = async (req, res) => {
    const {name, email, password} = req.body
    
    if(!name || !email || !password) {  
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {
        const existingUser = await User.findOne({email})

        if(existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const user = await User.create({
            name,
            email,
            password
        })

        if(!user) {
            return res.status(400).json({
                message: "User registration failed"
            })
        }

        const token = crypto.randomBytes(32).toString('hex')  

        user.verificationToken = token

        await user.save()

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD
            }
        })

        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email, 
            subject: "Verify your email",
            text: `Please Verify by clicking on this following link
            ${process.env.BASE_URL}/api/v1/users/verify/${token}
            `, 
        }

        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            message: "User registered successfully",
            success: true
        })

    } catch (err) {
        return res.status(400).json({
            message: "Registration failed"
        })
    }
}

const verifyUser = async (req, res) => {
    const { token } = req.params;

    if(!token) {
        return res.status(400).json({
            message: "Invalid Token"
        })
    }

    try {
        const user = await User.findOne({verificationToken: token})

        if(!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }

        user.isVerified = true
        user.verificationToken = undefined

        await user.save()

        return res.status(201).json({
            message: "Verification done"
        })
    } catch (err) {
        return res.status(400).json({
            message: "Verification failed"
        })
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    try {
        const user = await User.findOne({email})

        if(!user.isVerified) {
            return res.status(400).json({
                message: "Please verify your email"
            })
        }

        if(!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '24h'})

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            success: true,
            message: "Login Successful"
        })
        
    } catch (err) {
        return res.status(400).json({
            message: "Login failed",
            error
        })
    }
}

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        
        res.status(200).json({
            message: "Profile",
            success: true,
            user: user.email
        })
    } catch (err) {
        return res.status(400).json({
            message: "ERROR"
        })
    }
}

const logoutUser = async (req, res) => {
    res.cookie('token', '', {
        expiresIn: new Date(0)
    })

    res.status(200).json({
        message: "User logged out successfully",
        success: true
    })
}

const forgotPass = async (req, res) => {
    const { email } = req.body;

    if(!email) {
        return res.status(400).json({
            message: "Enter Email"
        })
    }

    try {
        const user = await User.findOne({email});
        
        if(!user) {
            return res.status(400).json({
                message: "Invalid Email"
            })
        }

        const token = crypto.randomBytes(32).toString('hex');

        user.resetPasswordToken = token
        user.resetPasswordExpires = Date.now() + 10 * 60 * 1000
        
        await user.save()
        
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD
            }
        })

        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email, 
            subject: "Verify your email",
            text: `Please Change your password by clicking on this following link
            ${process.env.BASE_URL}/api/v1/users/reset-password/${token}
            `, 
        }

        await transporter.sendMail(mailOptions);

        return res.status(201).json({
            message: "Email Sent",
            success: true
        })

    } catch (err) {
        return res.status(400).json({
            message: "Forgot Password failed",
            success: false,
            error
        })
    }
}

const resetPass = async (req, res) => {
    const { token } = req.params
    const { password } = req.body

    if(!token || !password) {
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }

    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {$gt: Date.now()}
        })

        if(!user) {
            return res.status(400).json({
                message: "Token expired"
            })  
        }

        user.password = password
        user.resetPasswordToken = undefined
        user.resetPasswordExpires = undefined

        await user.save()

        return res.status(200).json({
            message: "Password Changed Successfully",
            success: true
        })
    } catch (err) {

    }
}

export { registerUser, verifyUser, loginUser, getMe, logoutUser, forgotPass, resetPass }