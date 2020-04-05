const app = require('../../src/app');

describe('\'roku\' service', () => {
  it('registered the service', () => {
    const service = app.service('roku');
    expect(service).toBeTruthy();
  });
});
