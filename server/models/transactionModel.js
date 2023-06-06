const transactionsData = require('../data/transactions.json');

function getAll() {
    return transactionsData;
}

module.exports = {
	getAll
};