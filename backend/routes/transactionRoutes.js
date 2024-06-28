import express from "express";
import { isAuthenticatedUser } from "../middleware/auth.js";
import {
    bankReceiptGet, bankReceiptPost, bankReconcillationGet, bankReconcillationPost, billGenerationGet, cashReceiptGet,
    cashReceiptPost,
    chequeSlipGenerationGet, chequeSlipGenerationPost, closingJVGet, closingJVPost, creditNoteGet, creditNotePost, debitNoteGet, debitNotePost, journalVoucherGet, journalVoucherPost, ledgerEditGet,
    ledgerEditPost,
    memberReceiptGet, memberReceiptPost, multiplePaymentGet, multiplePaymentPost, multipleReceiptGet, multipleReceiptPost, openingBalanceGet, openingBalancePost, supplementaryReceiptGet,
    supplementaryReceiptPost
} from "../controllers/transactionController.js";
const router = express.Router();

router.route('/billGeneration').get(isAuthenticatedUser, billGenerationGet).post();
router.route('/memberReceipt').get(isAuthenticatedUser, memberReceiptGet).post(isAuthenticatedUser, memberReceiptPost);
router.route('/bankReceipt').get(isAuthenticatedUser, bankReceiptGet).post(isAuthenticatedUser, bankReceiptPost);
router.route('/cashReceipt').get(isAuthenticatedUser, cashReceiptGet).post(isAuthenticatedUser, cashReceiptPost);
router.route('/supplementaryReceipt').get(isAuthenticatedUser, supplementaryReceiptGet).post(isAuthenticatedUser, supplementaryReceiptPost);
router.route('/bankPayment').get(isAuthenticatedUser, bankReceiptGet).post(isAuthenticatedUser, bankReceiptPost);
router.route('/cashPayment').get(isAuthenticatedUser, cashReceiptGet).post(isAuthenticatedUser, cashReceiptPost);
router.route('/bankReconcillation').get(isAuthenticatedUser, bankReconcillationGet).post(isAuthenticatedUser, bankReconcillationPost);
router.route('/debitNote').get(isAuthenticatedUser, debitNoteGet).post(isAuthenticatedUser, debitNotePost);
router.route('/creditNote').get(isAuthenticatedUser, creditNoteGet).post(isAuthenticatedUser, creditNotePost);
router.route('/journalVoucher').get(isAuthenticatedUser, journalVoucherGet).post(isAuthenticatedUser, journalVoucherPost);
router.route('/closingJV').get(isAuthenticatedUser, closingJVGet).post(isAuthenticatedUser, closingJVPost);
router.route('/openingBalance').get(isAuthenticatedUser, openingBalanceGet).post(isAuthenticatedUser, openingBalancePost);
router.route('/multipleReceipt').get(isAuthenticatedUser, multipleReceiptGet).post(isAuthenticatedUser, multipleReceiptPost);
router.route('/multiplePayment').get(isAuthenticatedUser, multiplePaymentGet).post(isAuthenticatedUser, multiplePaymentPost);
router.route('/ledgerEdit').get(isAuthenticatedUser, ledgerEditGet).post(isAuthenticatedUser, ledgerEditPost);
router.route('/chequeSlipGeneration').get(isAuthenticatedUser, chequeSlipGenerationGet).post(isAuthenticatedUser, chequeSlipGenerationPost);

export default router

