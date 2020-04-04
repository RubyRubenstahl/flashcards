// Initializes the `roku/devices` service on path `/roku/devices`
const { Devices } = require('./devices.class');
const hooks = require('./devices.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/roku/devices', new Devices(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('roku/devices');

  service.hooks(hooks);
};
