// Initializes the `tv` service on path `/tv`
const { Tv } = require('./tv.class');
const createModel = require('../../models/tv.model');
const hooks = require('./tv.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tv', new Tv(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tv');

  service.hooks(hooks);
};
