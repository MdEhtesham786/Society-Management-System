export const sendCookie = (cookieName, token, expiryTime, res) => {
    const options = {
        expires: new Date(Date.now() + parseInt(expiryTime)),
        httpOnly: false,
        sameSite: 'none', // Allows cross-origin requests
        path: '/',
        domain: '127.0.0.1',
        secure: true // Ensures cookie is only sent over HTTPS

    };
    return res.cookie(cookieName, token, options);
};