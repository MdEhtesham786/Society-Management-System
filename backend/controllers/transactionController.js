import memberModel from "../models/memberModel.js";

export const billGenerationGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

// Member Receipt
export const memberReceiptGet = async (req, res) => {
    if (req.token) {
        const memberList = await memberModel.find();
        return res.json({
            success: true,
            memberList,
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

export const memberReceiptPost = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            body: req.body
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
        });
    }
};

// Bank Receipt
export const bankReceiptGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const bankReceiptPost = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            body: req.body
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
        });
    }
};

// Cash Receipt
export const cashReceiptGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const cashReceiptPost = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            body: req.body
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
        });
    }
};

// Supplementary Receipt
export const supplementaryReceiptGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const supplementaryReceiptPost = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            body: req.body
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
        });
    }
};

// Bank Payment
export const bankPaymentGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const bankPaymentPost = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            body: req.body
        });
    } else {
        return res.json({
            success: false,
            message: 'User must be logged in to get access to this page',
        });
    }
};

export const cashPaymentGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const bankReconcillationGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const debitNoteGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const creditNoteGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const journalVoucharGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const closingJVGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const openingBalanceGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const multipleReceiptGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const multiplePaymentGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const ledgerEditGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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

export const chequeSlipGenerationGet = async (req, res) => {
    if (req.token) {
        // const memberList = await memberModel.find();
        return res.json({
            success: true,
            // memberList,
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