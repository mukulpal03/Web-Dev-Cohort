import jwt from "jsonwebtoken"

const isLoggedIn = async (req, res, next) => {
    const { token } = req.cookies;

    if(!token) {
        return res.status(400).json({
            message: "Please Login"
        })
    }

    // console.log(token);
    

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)        
        req.user = decoded
        next()
    } catch (err) {
        console.log(err);
    }
}

export {isLoggedIn}