const request = require('supertest');
const app = require('../src/index');

describe('API Routes', () => {
    test('GET /api should return welcome message', async () => {
        const res = await request(app).get('/api');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });

    test('POST /api/longest-word should return correct result', async () => {
        const res = await request(app)
            .post('/api/longest-word')
            .send({ sentence: 'fun time' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toEqual('time');
    });

    test('POST /api/bracket-matcher should return correct result', async () => {
        const res = await request(app)
            .post('/api/bracket-matcher')
            .send({ str: '(test)' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toEqual(1);
    });
});
