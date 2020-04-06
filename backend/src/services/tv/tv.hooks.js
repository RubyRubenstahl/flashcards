const { authenticate } = require('@feathersjs/authentication').hooks;
const fetchRokuData = async context => {
  const { ip, port } = context.data.roku;
  const rokuUrl = `http://${ip}:${port}`
  const rokuData = await context.app.service('roku').get(rokuUrl);
  console.log(rokuData)
  context.data.roku.data = rokuData;
  return context;
}
module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [fetchRokuData],
    update: [],
    patch: [fetchRokuData],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
