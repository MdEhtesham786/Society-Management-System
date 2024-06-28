import express from "express";
import { ledger, memberList } from "../controllers/control.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.route('/ledger').get(isAuthenticatedUser, ledger);
router.route('/memberList').get(isAuthenticatedUser, memberList);
export default router

