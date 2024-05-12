import express from "express";
import { ledger, memberReceipt } from "../controllers/control.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.route('/ledger').get(isAuthenticatedUser, ledger);
router.route('/transaction/memberreceipt').get(isAuthenticatedUser, memberReceipt);

export default router

