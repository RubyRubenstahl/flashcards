const msGraph = require("../../lib/ms-graph.js");
const DataURI = require("datauri");
const datauri = new DataURI();

const mime = require("mime-types");
const { Unavailable } = require("@feathersjs/errors");
const {
  AuthenticationService,
  JWTStrategy
} = require("@feathersjs/authentication");
const { LocalStrategy } = require("@feathersjs/authentication-local");
const { expressOauth } = require("@feathersjs/authentication-oauth");

const { OAuthStrategy } = require("@feathersjs/authentication-oauth");

class GoogleOauthStrategy extends OAuthStrategy {
 

  getEntityQuery (profile, params) {
    return { email: profile.email }
  }

  async getEntityData (profile) {
    // Include the `email` from the GitHub profile when creating
    // or updating a user that logged in with GitHub
  const baseData = await super.getEntityData(profile);

  // this will grab the picture and email address of the Google profile
  return {
    ...baseData,
    avatar: profile.picture,
    email: profile.email,
    displayName: profile.name,
    firstName: profile.family_name,
    lastName: profile.given_name
  };
  }

  // async  getCurrentEntity (params) {
  // }

  async createEntity(profile) {
    const user = await super.createEntity({
      email: profile.email,
      avatar: profile.picture
    });
    return user;
  }
}


module.exports = GoogleOauthStrategy;
