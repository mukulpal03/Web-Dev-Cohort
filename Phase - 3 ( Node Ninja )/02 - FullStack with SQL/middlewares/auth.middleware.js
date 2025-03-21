import jwt from "jsonwebtoken"

export const isLoggedIn = async (req, res, next) => {
    try {
        const {token} = req.cookies

        if(!token) {
            return res.status(401).json({
                message: "Please login"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded

        next()
    } catch (err) {
        return res.status(401).json({
            message: "Please login"
        })
    }
}