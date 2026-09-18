const express = require("express");
const { createTransaction, 
        searchTransaction, 
        updateTransaction, 
        searchTransactionById,
        deleteTransaction} = require("../controllers/transactionController");
const router = express.Router();

router.post("/transactions", createTransaction);
router.get("/transactions", searchTransaction);
router.get("/transactions/:id", searchTransactionById);
router.put("/transactionUpdate/:id", updateTransaction);
router.delete("/transactionDelete/:id", deleteTransaction);

module.exports = router;