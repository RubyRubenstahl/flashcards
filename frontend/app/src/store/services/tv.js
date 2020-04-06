// src/store/services/users.js
import feathersClient, {
  makeServicePlugin,
  BaseModel,
} from "../../feathers-client";

class Tv extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = "Tv";
  // Define default properties here
  static instanceDefaults() {
    return {
      name: "",
      icon: "",
      roku: {
        ip: "",
        port: 1900,
      },
      lirc: {
        ip: "",
        port: 8765,
      },
    };
  }
}
const servicePath = "tv";
const servicePlugin = makeServicePlugin({
  Model: Tv,
  service: feathersClient.service(servicePath),
  servicePath,
  getters: {
    tvButtons: (state, getters) => {
      const res = getters.find({ paginate: false });
      return res.data.map((tv) => ({
        title: tv.name,
        ...tv
      }));
    },
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
