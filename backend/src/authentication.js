const {
  AuthenticationService,
  JWTStrategy
} = require("@feathersjs/authentication");
const { LocalStrategy } = require("@feathersjs/authentication-local");
const { expressOauth } = require("@feathersjs/authentication-oauth");

const { OAuthStrategy } = require("@feathersjs/authentication-oauth");

class MicrosoftOauthStrategy extends OAuthStrategy {
  async getProfile(data, params) {
    if (data.error) {
      console.error(data);
      console.error(params);
      return;
    }
    // console.log(data);
    return data;
  }

  async getEntityData(profile) {
    console.log(profile);
    // Include the `email` from the GitHub profile when creating
    // or updating a user that logged in with GitHub
    const baseData = await super.getEntityData(profile);
    return {
      ...baseData,
      email: profile.email
    };
  }

  async createEntity(profile) {
    return;
  }
}




module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register("jwt", new JWTStrategy());
  authentication.register("local", new LocalStrategy());

  app.use("/authentication", authentication);
  // authentication.register("microsoft", new OAuthStrategy());
  authentication.register("microsoft", new MicrosoftOauthStrategy());
  app.configure(expressOauth());
};
