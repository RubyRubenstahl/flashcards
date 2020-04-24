// Initializes the `app-info` service on path `/app-info`
const { AppInfo } = require('./app-info.class');
const hooks = require('./app-info.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/app-info', new AppInfo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('app-info');

  service.hooks(hooks);
};
