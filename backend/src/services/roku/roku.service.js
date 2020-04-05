// Initializes the `roku` service on path `/roku`
const { Roku } = require('./roku.class');
const hooks = require('./roku.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/roku', new Roku(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('roku');

  service.hooks(hooks);
};
