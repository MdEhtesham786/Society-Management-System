import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils.js/jwtToken.js";
export const isLoggedInUser = async (req, res) => {
    if (req.token) {
        return res.json({
            success: true,
            user: req.user
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
        });
    }
};
export const register = catchAsyncErrors(async (req, res) => {
    try {
        const { username, email, password, confirm_password } = req.body;
        if (!username || !email || !password || !confirm_password) {
            return res.redirect('/api/v1/auth/register?error=Please_enter_all_the_required_fields');
        }
        const Users = await userModel.findOne({ email });
        if (!Users) {
            if (password !== confirm_password) {
                return res.send('Password and Confirm Password does not match');
            }
            const user = new userModel(req.body);
            await user.save();
            res.json({
                success: true,
                user
            });
        } else {
            return res.send('Email already in use');
        }
    } catch (err) {
        console.log(err.message);
        res.status(422).json({
            success: false,
            error: err.message
        });

    }
});
export const login = catchAsyncErrors(async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({
                success: false,
                message: 'Enter valid credentials'
            });
        }
        const user = await userModel.findOne({ email }).select('+password');
        if (user) {
            const isMatched = await user.comparePassword(password);
            if (!isMatched) {
                return res.json({
                    success: false,
                    message: 'Invalid Email or Password'
                });
            }
            const loggedInUser = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '1y'
            });
            sendCookie('token', loggedInUser, 31536000000, res);
            // res.cookie('token', jwtToken);
            return res.json({
                success: true,
                user,
                jwtToken: loggedInUser
            });
        } else {
            res.json({
                success: false,
                message: 'Invalid Email or Password'
            });
        }

    } catch (err) {
        console.log(err);
        res.status(422).json({
            success: false,
            error: err.message
        });
    }
});
export const logout = catchAsyncErrors(async (req, res) => {
    const { token } = req.cookies;
    if (token) {
        const result = res.clearCookie('token', { domain: process.env.COOKIE_DOMAIN, path: '/', sameSite: 'none', secure: true });
        res.json({
            success: true,
            // result,
            message: 'Token successfully removed'
        });
        console.log('Token successfully removed');
    } else {
        res.json({
            success: false,
            message: 'Token not found'
        });
    }
});