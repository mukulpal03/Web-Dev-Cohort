import express from "express"
import { forgotPass, getMe, loginUser, logoutUser, registerUser, resetPass, verifyUser } from "../controllers/User.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router()

router.post('/register', registerUser);
router.get('/verify/:token', verifyUser);
router.post('/login', loginUser);
router.get('/me',isLoggedIn ,getMe);
router.post('/logout', logoutUser);
router.post('/forgot-password', forgotPass);
router.post('/reset-password/:token', resetPass);

export default router;