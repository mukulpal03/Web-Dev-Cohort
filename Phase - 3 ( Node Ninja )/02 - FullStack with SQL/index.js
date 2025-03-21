import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRoutes from "./routes/auth.route.js"

dotenv.config()

const port = process.env.PORT || 4000;

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
    res.send("test route")
})

app.use('/api/v1/users', userRoutes)

app.listen(port)