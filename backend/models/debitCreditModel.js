import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const noteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },//required

    date: {
        type: String
    },

    amount: {
        type: Number,
        required: true
    },
    principal: {
        type: Number,
        required: true
    },//required
    interest: {
        type: Number,
        required: true
    },
    narration: {
        type: String

    }, type: {
        type: String,
        required: true
    },
    receipt_type: {
        type: String
    }
});
const noteModel = mongoose.model('Debit/Credit/JV Details', noteSchema);
export default noteModel;