const supertest = require('supertest');
const app = require('../index');

const api = supertest(app);

const filtro = 'Phil';

describe('players', () => {
    test('of getPlayersByTextFilter are returned as json', async () => {
        await api
            .get(`/api/players/${filtro}`)
            .expect(200)
            .expect('Content-Type', /application\/json/);
    });

    test('of getPlayersByTextFilter with "Phil" returns 3 players', async () => {
        const response = await api.get(`/api/players/${filtro}`);

        expect(response.body).toHaveLength(3);
    });

    test('of getPlayersByTextFilter returning only one object by mail', async () => {
        const filtroLocal = 'flacroutzir@youku.com';
        const response = await api.get(`/api/players/${filtroLocal}`);

        expect(response.body[0].full_name).toBe('Felizio Lacroutz');
    });

    test('of getPlayersByTextFilter returning no object', async () => {
        const filtroLocal = 'x3j7';
        const response = await api.get(`/api/players/${filtroLocal}`);

        expect(response.body).toHaveLength(0);
    });
});
