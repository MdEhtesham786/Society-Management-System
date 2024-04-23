import express from "express";
// import { loginPage, registerPage } from "../controllers/control.js";
import { login, register } from "../controllers/userController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();
router.route('/login').post(login);
router.route('/register').post(register);

export default router

