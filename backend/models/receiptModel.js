import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const receiptSchema = new mongoose.Schema({
    bank_cash: {
        type: String,
        required: true
    },
    bank_cash_account: {
        type: String,
        required: true
    },//required
    entry_name: {
        type: String,
        required: true
    },//required
    entry_bank: {
        type: String,
    },
    entry_branch: {
        type: String
    },
    date: {
        type: String
    },
    cheque_refno: {
        type: String
    },//required
    micr_ifsc: {
        type: String
    },
    cheque_ref_date: {
        type: String
    },
    amount: {
        type: Number
    },
    principal: {
        type: Number
    },//required
    interest: {
        type: Number
    },
    narration: {
        type: String
    }
});
const receiptModel = mongoose.model('Receipt Details', receiptSchema);
export default receiptModel;