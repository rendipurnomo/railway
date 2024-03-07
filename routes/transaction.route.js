const express = require('express');
const {createTransaction, getAllTransactions, getTransactionById, updateTransaction, deleteTransaction} = require('../controllers/transaction.controller.js');

const router = express.Router();

router.post('/', createTransaction);
router.get('/', getAllTransactions);
router.get('/:id', getTransactionById);
router.patch('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router