import express from "express";
import { ledger, memberList, adminSettingsGet, adminSettingsPost } from "../controllers/control.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.route('/ledger').get(isAuthenticatedUser, ledger);
router.route('/memberList').get(isAuthenticatedUser, memberList);
router.route('/admin/settings').get(isAuthenticatedUser, adminSettingsGet).post(isAuthenticatedUser, adminSettingsPost);

export default router

