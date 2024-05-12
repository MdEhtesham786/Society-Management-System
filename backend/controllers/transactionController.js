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

// Cash Payment
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

export const cashPaymentPost = async (req, res) => {
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
}

// Bank Reconcillation
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

export const bankReconcillationPost = async (req, res) => {
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
}

// Debit Note
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

export const debitNotePost = async (req, res) => {
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
}

// Credit Note
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

export const creditNotePost = async (req, res) => {
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
}

// Journal Vouchar
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

export const journalVoucharPost = async (req, res) => {
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
}

// Closing JV
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

export const closingJVPost = async (req, res) => {
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
}

// Opening Balance
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

export const openingBalancePost = async (req, res) => {
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
}

// Multiple Receipt
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

export const multipleReceiptPost = async (req, res) => {
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
}

// Multiple Payment
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

export const multiplePaymentPost = async (req, res) => {
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
}

// Ledger Edit
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

export const ledgerEditPost = async (req, res) => {
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
}

// Cheque Slip Generation
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
<<<<<<< HEAD
};
=======
}

export const chequeSlipGenerationPost = async (req, res) => {
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
}
>>>>>>> d8c166ce4cb4b36b94f8dd8258090266f96ddbd5
