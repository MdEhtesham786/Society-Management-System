import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Enter your Username'],
        minLength: [4, 'Name should have more than 4 characters']
    },
    email: {
        type: String,
        required: [true, 'Please Enter your Email'],
        minLength: [4, 'Name should have more than 4 characters']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: {
        publicID: {
            type: String
        },

        url: {
            type: String
        }
    },
    roles: {
        type: Array,
        default: ['manager']
    }
});
// Hashing password before save
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//Compare password 
userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};
const userModel = mongoose.model('user', userSchema);
export default userModel;