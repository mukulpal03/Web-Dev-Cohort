import express from "express"
import { forgotPassword, getMe, loginUser, logoutUser, registerUser, resetPassword, verifyUser } from "../controllers/auth.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.get('/verify/:token', verifyUser);
router.post('/login', loginUser);
router.get('/me', isLoggedIn, getMe);
router.post('/logout', isLoggedIn, logoutUser);
router.get('/forgot-password',isLoggedIn, forgotPassword);
router.post('/reset-password/:token', isLoggedIn, resetPassword)

export default router;