const express = require('express');
const rewardsController = require('../controllers/rewardsController');

const router = express.Router();

// GET /api/rewards
router.get('/', rewardsController.getAllRewards);

// GET /api/rewards/:customerId
router.get('/:customerId', rewardsController.getRewardsByCustomerId);

module.exports = router;
