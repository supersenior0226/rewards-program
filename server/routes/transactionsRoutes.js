const express = require('express');
const transactionsController = require('../controllers/transactionsController');

const router = express.Router();

// GET /api/transactions
router.get('/', transactionsController.getAllTransactions);

module.exports = router;
