const app = require('../../../src/app');

describe('\'mail/outgoing\' service', () => {
  it('registered the service', () => {
    const service = app.service('mail/outgoing');
    expect(service).toBeTruthy();
  });
});
