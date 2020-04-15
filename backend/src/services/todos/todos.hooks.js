const { authenticate } = require('@feathersjs/authentication').hooks;
const {alterItems} = require('feathers-hooks-common')
const addUsername = alterItems(async (item, context) => {
  const user = await context.app.service('users').get(item.userId);
  item.username = user.username
  return item
}) 


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [addUsername],
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
