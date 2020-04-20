// Initializes the `mail/incoming` service on path `/mail/incoming`
const { Incoming } = require('./incoming.class');
const hooks = require('./incoming.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mail/incoming', new Incoming(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mail/incoming');

  service.hooks(hooks);
};
