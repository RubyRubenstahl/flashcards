const app = require('../../../src/app');

describe('\'roku/devices\' service', () => {
  it('registered the service', () => {
    const service = app.service('roku/devices');
    expect(service).toBeTruthy();
  });
});
