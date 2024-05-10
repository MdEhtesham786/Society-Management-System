import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const memberSchema = new mongoose.Schema({
    BillCode: {
        type: String,
        required: [true, 'Please enter BillCode'],
    },
    Title: {
        type: String,

    },
    Name: {
        type: String,
        required: [true, 'Please enter Name']
    },
    Wing: {
        type: String
    },
    FlatNo: {
        type: String,
        required: [true, 'Please enter Flat No']
    },
    BldgNo: {
        type: Number,
        required: [true, 'Please enter Building No']
    },
    Email: {
        type: String,
    },
    PhoneNumber: {
        type: Number,
    },
    FlatArea: {
        type: Number,
        required: [true, 'Please enter Flat Area']
    },
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
        required: [true, 'Manager ID not found']
    }
});
const memberModel = mongoose.model('Member Details', memberSchema);
export default memberModel;