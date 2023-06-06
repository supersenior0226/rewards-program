const request = require('supertest');
const app = require('../app');
const Reward = require('../models/rewardModel');

describe('Rewards API', () => {
    it('should get all rewards', async () => {
        const response = await request(app).get('/api/rewards');
      
        expect(response.status).toBe(200);
        expect(response.body).toEqual(Reward.getAll());
    });

    it('should get rewards by customer ID', async () => {
        const customerId = '3';
        const response = await request(app).get(`/api/rewards/${customerId}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(Reward.getByCustomerId(customerId));
    });
});
