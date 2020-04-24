const app = require('../../src/app');

describe('\'app-info\' service', () => {
  it('registered the service', () => {
    const service = app.service('app-info');
    expect(service).toBeTruthy();
  });
});
