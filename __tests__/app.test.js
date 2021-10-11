const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

describe('five-models routes', () => {
  beforeAll(() => {
    return setup(pool);
  });


  it('gets posts api data to repos table', async () => {
    const api_data = await getApiData(); 
    const res =  await request(app).post('/repos').send(api_data[0]);
    expect(res.body).toEqual({ id:1, repo: expect.any(String) });





  });





  afterAll(() => {
    pool.end();
  });
});
