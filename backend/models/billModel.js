import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const billSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    sub_type: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },//required

    bill_date: {
        type: String
    },

    due_date: {
        type: String,
    },
    is_credit_limit: {
        type: Boolean,
        default: false
    },//required
    credit_amount: {
        type: Number,
        default: 0
    },
    rebate_date: {
        type: String
    },
    rebate_days: {
        type: Number,
        default: 0
    },
    rebate_percentage: {
        type: Number,
        default: 0
    },
    interest_type: {
        type: String
    },
    interest_days: {
        type: Number,
        default: 30
    },
    interest_percentage: {
        type: Number,
        default: 1.75
    }, manual_interest: {
        type: Boolean,
    },
    building: {
        type: String,
        default: 'All'
    },
    wing: {
        type: String
    },
    narration: {
        type: String

    },
});
const billModel = mongoose.model('Bill Details', billSchema);
export default billModel;