const db = require('../database/dbConfig');
const Users = require('./users-model');

describe('insert()', () => {

    beforeEach(async () => {
        await db('users').truncate();
    })

    it('should find user by id', async () => {
        await Users.insert({id: 679, username: 'jeff', password: 'pass'});

        const user = await Users.findById(679)
        expect(user).toHaveLength(1)
    })
})

describe('findById()', () => {

    beforeEach(async () => {
        await db('users').truncate();
    })

    it('should find user by id', async () => {
        await Users.insert({id: 679, username: 'jeff', password: 'pass'});

        const user = await Users.findById(679)
        expect(user).toHaveLength(1)
    })
})

