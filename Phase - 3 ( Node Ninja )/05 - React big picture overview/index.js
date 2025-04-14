import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
import userRoutes from "./routes/User.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

db();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie", "*"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Sever listening at port: ${port}`);
});
