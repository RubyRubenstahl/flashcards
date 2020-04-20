// Initializes the `mail/outgoing` service on path `/mail/outgoing`
const { Outgoing } = require('./outgoing.class');
const hooks = require('./outgoing.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mail/outgoing', new Outgoing(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mail/outgoing');

  service.hooks(hooks);
};
