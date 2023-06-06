const transactionsData = require('../data/transactions.json');
const { calculateRewardsPoints } = require('../utils/helpers');

function getAll() {
	// Calculate rewards from the transaction data and return
	// Implement the logic for calculating rewards based on transaction amount
	// and apply the algorithm we discussed earlier
	const rewards = transactionsData.map((transaction) => ({
		transactionId: transaction.id,
		price: transaction.amount,
		rewardPoints: calculateRewardsPoints(transaction.amount),
	}));
	return rewards;
}

function getByCustomerId(customerId) {
	// Filter rewards based on the given customer ID
	const rewards = this.getAll().filter((reward) => reward.customerId === customerId);
	return rewards;
}

module.exports = {
	getAll,
	getByCustomerId
};