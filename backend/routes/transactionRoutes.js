import express from "express";
import { isAuthenticatedUser } from "../middleware/auth.js";
import {
    bankReceiptGet, bankReconcillationGet, billGenerationGet, cashReceiptGet,
    chequeSlipGenerationGet, closingJVGet, creditNoteGet, debitNoteGet, journalVoucharGet, ledgerEditGet,
    memberReceiptGet, memberReceiptPost, multiplePaymentGet, multipleReceiptGet, openingBalanceGet, supplementaryReceiptGet
} from "../controllers/transactionController.js";
const router = express.Router();

router.route('/billGeneration').get(isAuthenticatedUser, billGenerationGet).post();
router.route('/memberReceipt').get(isAuthenticatedUser, memberReceiptGet).post(isAuthenticatedUser, memberReceiptPost);
router.route('/bankReceipt').get(isAuthenticatedUser, bankReceiptGet).post();
router.route('/cashReceipt').get(isAuthenticatedUser, cashReceiptGet).post();
router.route('/supplementaryReceipt').get(isAuthenticatedUser, supplementaryReceiptGet).post();
router.route('/bankPayment').get(isAuthenticatedUser, bankReceiptGet).post();
router.route('/cashPayment').get(isAuthenticatedUser, cashReceiptGet).post();
router.route('/bankReconcillation').get(isAuthenticatedUser, bankReconcillationGet).post();
router.route('/debitNote').get(isAuthenticatedUser, debitNoteGet).post();
router.route('/creditNote').get(isAuthenticatedUser, creditNoteGet).post();
router.route('/journalVouchar').get(isAuthenticatedUser, journalVoucharGet).post();
router.route('/closingJV').get(isAuthenticatedUser, closingJVGet).post();
router.route('/openingBalance').get(isAuthenticatedUser, openingBalanceGet).post();
router.route('/multipleReceipt').get(isAuthenticatedUser, multipleReceiptGet).post();
router.route('/multiplePayment').get(isAuthenticatedUser, multiplePaymentGet).post();
router.route('/ledgerEdit').get(isAuthenticatedUser, ledgerEditGet).post();
router.route('/chequeSlipGeneration').get(isAuthenticatedUser, chequeSlipGenerationGet).post();

export default router

