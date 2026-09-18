const Transaction = require("../models/transaction");

const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);

        return res.status(201).json(transaction);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            err: "Error creating transaction"
        });
    }
};

const searchTransaction = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        
        return res.status(200).json(transactions);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            err: "Error fetching transaction"
        });
    }
};

const searchTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findOne({
            id: req.params.id
        });

        if(!transaction) {
            return res.status(404).json({
                err: "Transaction not found"
            });
        }

        return res.status(200).json(transaction);
    } catch(err) {
        console.error(err);
        return res.status(500).json({
            err: "Error fetching transaction by id"
        });
    }
}

const updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndUpdate(
            {id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        );
        if(!transaction) {
            return res.status(404).json({
                err: "Transaction not found"
            });
        }

        return res.status(200).json(transaction);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            err: "Error updating transaction"
        });
    }
}

const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndDelete({
            id: req.params.id
        });

        if(!transaction) {
            return res.status(404).json({
                err: "Transaction not found"
            });
        }

        return res.status(200).json({
            message: "Transaction deleted successfully"
        })
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            err: "Error deleting transaction"
        });
    }
}

module.exports = {
    createTransaction,
    searchTransaction,
    searchTransactionById,
    updateTransaction,
    deleteTransaction
};