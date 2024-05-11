// export const loginPage = async (req, res) => {
//     res.send('(login get)' + ' ' + req.query?.error);

// };
// export const registerPage = async (req, res) => {
//     res.send('(register get)' + ' ' + req.query?.error);
// }; 
import memberModel from "../models/memberModel.js";
export const ledger = async (req, res) => {
    if (req.token) {
        return res.json({
            success: true,
            token: req.token,
            user: req.user
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
            cookies: req.cookies
        });
    }
};
export const memberReceipt = async (req, res) => {
    if (req.token) {
        const memberList = await memberModel.find();
        return res.json({
            success: true,
            memberList
            ,
            token: req.token,
            user: req.user
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
        });
    }
}




