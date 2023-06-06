const request = require('supertest');
const app = require('../app');
const Transaction = require('../models/transactionModel');

describe('Transactions API', () => {
    it('should get all transactions', async () => {
        const response = await request(app).get('/api/transactions');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(Transaction.getAll());
    });
});
