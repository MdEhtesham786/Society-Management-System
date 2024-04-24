import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import ErrorHandler from '../utils.js/errorHandler.js';
import jwt from "jsonwebtoken";
import userModel from '../models/userModel.js';
export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;//string
    // if (!token) {
    //     return next(new ErrorHandler('Please login to access this resource', 401));
    // }
    console.log('I got lucky', token);
    if (token) {
        try {
            const decodedData = jwt.verify(token, process.env.JWT_SECRET,);
            const user = await userModel.findById({ _id: decodedData.id }, {
                expiresIn: '1y'
            });
            req.user = user;
            req.token = token;
            console.log('NHI AAYAA');
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                console.log('Jwt Expired (Token cleared)');
                res.clearCookie('token');
                console.log('Ye bakchodi nhi');
            }
        }
    }
    // sendToken(user, process.env.JWT_EXPIRE);
    // console.log(token);
    next();

});
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        // console.log(req.user);
        if (!req.user) {
            return next(new ErrorHandler('Token expired, Please login again'));
        }
        const userRoles = req.user?.roles;
        let authorize = false;
        userRoles.forEach((role) => {
            if (roles.includes(role)) {
                authorize = true;
            }
        });
        if (!authorize) {
            if (userRoles.includes('seller')) {
                return next(new ErrorHandler(`Role: Users and Sellers are not allowed to access this resource`), 403);
            } else if (userRoles.includes('user')) {
                return next(new ErrorHandler(`Role: Users are not allowed to access this resource`), 403);
            } else {
                return;
            }
        }
        next();
    };
};
