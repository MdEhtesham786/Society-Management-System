// export const loginPage = async (req, res) => {
//     res.send('(login get)' + ' ' + req.query?.error);

// };
// export const registerPage = async (req, res) => {
//     res.send('(register get)' + ' ' + req.query?.error);
// }; 
import receiptModel from "../models/receiptModel.js";
import memberModel from "../models/memberModel.js";
import userModel from "../models/userModel.js";
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
export const memberList = async (req, res) => {
    if (req.token) {
        let arr = [];
        const memberList = await memberModel.find();
        memberList.forEach((member, i) => {
            if (i == 0) {
                arr.push({
                    title: 'Select',
                    value: 'select_name'
                });
                arr.push({
                    title: member.Name,
                    value: member.Name

                });
            } else {
                arr.push({
                    title: member.Name,
                    value: member.Name

                });
            }

        });
        return res.json({
            success: true,
            memberList: arr,
            token: req.token,
            user: req.user
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
        });
    }
};
export const adminSettingsGet = async (req, res) => {
    if (req.token) {
        const user = await userModel.findById(req.user.id);
        return res.json({
            success: true,
            settings: user.settings
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
            cookies: req.cookies
        });
    }
};
export const adminSettingsPost = async (req, res) => {
    if (req.token) {
        const { primaryColor, secondaryColor } = req.body;
        const newSettings = { primaryColor, secondaryColor };

        const user = await userModel.findByIdAndUpdate(req.user.id, { settings: newSettings }, { new: true, runValidators: true });
        await user.save();
        return res.json({
            success: true,
            updatedSettings: user.settings
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
            cookies: req.cookies
        });
    }
};






