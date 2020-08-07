describe('beach forecast functional tests', () => {
  it('should return a forecast with just few times', async () => {
    const { body, status } = await global.testRequest.get('/forecasts')
    expect(status).toBe(200);
    expect(body).toEqual({id: 1});
  });
})