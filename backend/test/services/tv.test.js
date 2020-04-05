const app = require('../../src/app');

describe('\'tv\' service', () => {
  it('registered the service', () => {
    const service = app.service('tv');
    expect(service).toBeTruthy();
  });
});
