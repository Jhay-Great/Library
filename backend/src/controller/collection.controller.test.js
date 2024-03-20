const request = require('supertest');
const app = require('../app');

describe('Testing GET /genre', () => {
    test('Api should respond with 200 success', async () => {
        const response = await request(app)
        .get('/genre')
        .expect('Content-Type', /json/)
        .expect(200);
        expect(response.statusCode).toBe(200);
    })
})


