/* eslint-disable no-unused-vars */
const { NotFound } = require('@feathersjs/errors');
exports.AppInfo = class AppInfo {
  constructor(options) {
    this.options = options || {};
  }

  async get(id, params) {
    const users = await this.app
      .service('users')
      .find({ query: { isAdmin: true, $limit: 0 } });

    switch (id) {
    case 'public':
      return { isFirstRun: users.total === 0 };
    default:
      throw new NotFound();
    }
  }

  setup(app, path) {
    this.app = app;
  }
};
