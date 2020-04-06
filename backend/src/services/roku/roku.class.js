/* eslint-disable no-unused-vars */
const { Client, keys } = require("roku-client");

exports.Roku = class Roku {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    return [];
  }

  async get(url, params) {
    const client = new Client(url);
    try {
      const data = {
        info: await client.info(),
        apps: await client.apps(),
        active: await client.active(),
        
      };
    return data;

    } catch (err) {
      console.err("Failed to get roku data. Reason: " + err.message);
       return null
    }
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }
};
