// src/store/services/users.js
import feathersClient, {
  makeServicePlugin,
  BaseModel,
} from "../../feathers-client";

class Todo extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = "Todo";
  // Define default properties here
  static instanceDefaults () {
    return {
      task: '',
      description: '',
      completed: feathersClient,
      due: {
        mode: 'onDate',
        date: null
      },
      repeat: {
        mode: 'once',
        date: null,
        daysOfWeek:[]
      }

    }
  }
}
const servicePath = "todos";
const servicePlugin = makeServicePlugin({
  Model: Todo,
  service: feathersClient.service(servicePath),
  servicePath,
  getters: {
   
  },
});

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
});

export default servicePlugin;
