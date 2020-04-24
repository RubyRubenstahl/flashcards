/* eslint-disable no-unused-vars */
exports.AppInfo = class AppInfo {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    const users = await this.app.service('users').find({ query: { isAdmin: true, $limit: 0 } });

    return {
      isFirstRun: users.total ===0
    };
  }

  setup (app, path) {
    this.app = app;
  }
};
