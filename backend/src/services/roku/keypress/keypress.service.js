// Initializes the `roku/keypress` service on path `/roku/keypress`
const { Keypress } = require('./keypress.class');
const hooks = require('./keypress.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/roku/keypress', new Keypress(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('roku/keypress');

  service.hooks(hooks);
};
