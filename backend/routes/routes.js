import express from "express";
import { ledger } from "../controllers/control.js";
// import { login, register } from "../controllers/userController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.route('/ledger').get(isAuthenticatedUser, ledger);
export default router

