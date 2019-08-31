const server = require('./server');

describe('GET /', () => {

    it('should return 200 ok', async () => {

        const res = await request(server).get('/')

        expect(res.status).toBe(200)
    })

    it('should return a json object', async () => {
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json')
    })

})