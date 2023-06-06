const Transaction = require('../models/transactionModel.js');

// GET /api/transactions
const getAllTransactions = (req, res) => {
    // Retrieve transactions from the database or JSON file
    const transactions = Transaction.getAll();
    res.json(transactions);
};

module.exports = {
    getAllTransactions,
};
