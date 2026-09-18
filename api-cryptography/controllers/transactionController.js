const Transaction = require("../models/transaction");

const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);

        return res.status(201).json(transaction);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            err: "Erro ao criar transação"
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
            err: "Erro ao buscar transação"
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
                err: "Transação não encontrada"
            });
        }

        return res.status(200).json(transaction);
    } catch(err) {
        console.error(err);
        return res.status(500).json({
            err: "Erro ao buscar transação por id"
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
                err: "Transação não encontrada"
            });
        }

        return res.status(200).json(transaction);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            err: "Erro ao atualizar transação"
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
                err: "Transação não encontrada"
            });
        }

        return res.status(200).json({
            message: "Transação deletada com sucesso"
        })
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            err: "Erro ao deletar transação"
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