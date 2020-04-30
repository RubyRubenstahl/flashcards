const { authenticate } = require("@feathersjs/authentication").hooks;

// TODO: Allow admin user to be added on first run
// TODO: Disallow duplicates
const { alterItems } = require("feathers-hooks-common");
const {
  hashPassword,
  protect
} = require("@feathersjs/authentication-local").hooks;

const mergeDefaults = alterItems(user => {
  return {
    isAdmin: false,
    loginEnabled: false,
    roles: [],
    rights: [],
    ...user
  };
});

const makeFirstUserAdmin = async context => {
  const existingUsers = await context.service.find({ query: { $limit: 0 } });
  if (existingUsers.total === 0) {
    context.data.isAdmin = true;
    context.data.loginEnabled = true;
  }
  return context;

}


const stripEmptyPasswords = alterItems(user => {
  const password = String(user.password).trim();
  if (password === '') {
    delete user.password;
  }
  return user;
})

module.exports = {
  before: {
    all: [],
    find: [authenticate("jwt")],
    get: [authenticate("jwt")],
    create: [hashPassword("password"), mergeDefaults, makeFirstUserAdmin],
    update: [hashPassword("password"), authenticate("jwt")],
    patch: [stripEmptyPasswords, hashPassword("password"), authenticate("jwt")],
    remove: [authenticate("jwt")]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password")
    ],
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
