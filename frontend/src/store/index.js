import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./store.auth";
// import example from './module-example'
import { FeathersVuex } from "../feathers-client";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex)
Vue.use(FeathersVuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */



const requireModule = require.context(
  // The path where the service modules live
  "./services",
  // Whether to look in subfolders
  true,
  // Only include .js files (prevents duplicate imports`)
  /.js$/
);
const servicePlugins = requireModule
  .keys()
  .map((modulePath) => requireModule(modulePath).default);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },
    plugins: [...servicePlugins, auth],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  });
  return Store
}



