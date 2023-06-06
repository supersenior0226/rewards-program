const Transaction = require('../models/transactionModel.js');
const Reward = require('../models/rewardModel.js');

// GET /api/rewards
const getAllRewards = (req, res) => {
	// Retrieve rewards from the database or JSON file
	const rewards = Reward.getAll();
	res.json(rewards);
};

// GET /api/rewards/:customerId
const getRewardsByCustomerId = (req, res) => {
	const { customerId } = req.params;
	
	// Retrieve rewards for the given customer ID from the database or JSON file
	const rewards = Reward.getByCustomerId(customerId);
	res.json(rewards);
};

module.exports = {
	getAllRewards,
	getRewardsByCustomerId,
};
