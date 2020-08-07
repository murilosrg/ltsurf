import supertest from 'supertest';

describe('beach forecast functional tests', () => {
  it('should return a forecast with just few times', async () => {
    const { body, status } = await supertest(app).get('/forecast')
    expect(status).toBe(200);
    expect(body).toBe({});
  });
})