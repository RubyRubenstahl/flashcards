const app = require('../../../src/app');

describe('\'roku/keypress\' service', () => {
  it('registered the service', () => {
    const service = app.service('roku/keypress');
    expect(service).toBeTruthy();
  });
});
