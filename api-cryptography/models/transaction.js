const mongoose = require("mongoose");
const { encrypt, decrypt } = require("../crypto/crypto");


const transactionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },

    userDocument: {
        type: String,
        required: true
    },

    creditCardToken: {
        type: String,
        required: true
    },

    value: {
        type: Number,
        required: true
    },
});

transactionSchema.pre("save", function () {
    this.userDocument = encrypt(this.userDocument);
    this.creditCardToken = encrypt(this.creditCardToken);
});

transactionSchema.post("find", function (transactions) {
    transactions.forEach((transaction) => {
        transaction.userDocument = decrypt(transaction.userDocument);
        transaction.creditCardToken = decrypt(transaction.creditCardToken);
    });
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;