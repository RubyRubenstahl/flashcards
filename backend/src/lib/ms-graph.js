const axios = require("axios");
const deepMerge = require('deepmerge')

const graph = profile => ({
  baseOpts: {
    baseURL: "https://graph.microsoft.com/v1.0/",
    method: "GET",
    headers: {
      Authorization: `Bearer ${profile.access_token}`
    }
  },

  async get (endpoint, opts = {}) {
    const mergedOpts = deepMerge(this.baseOpts, opts);
        return axios.get(endpoint, mergedOpts).catch(err => {
          throw new Error("MS Graph query failed, reason: " + err.message);
        });
    }
});

module.exports = graph;
