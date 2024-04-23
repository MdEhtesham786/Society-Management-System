// export const loginPage = async (req, res) => {
//     res.send('(login get)' + ' ' + req.query?.error);

// };
// export const registerPage = async (req, res) => {
//     res.send('(register get)' + ' ' + req.query?.error);
// }; 
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
            req: req.cookies
        });
    }
};




