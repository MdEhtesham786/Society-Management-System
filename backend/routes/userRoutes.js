import express from "express";
// import { isLoggedInUser } from "../controllers/control.js";
import { login, register, isLoggedInUser, logout } from "../controllers/userController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/islogin').post(isAuthenticatedUser, isLoggedInUser);
router.route('/logout').post(logout);

export default router

