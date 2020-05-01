const msGraph = require("../../lib/ms-graph");
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

class MicrosoftOauthStrategy extends OAuthStrategy {
  async fetchOfficeProfile(authData) {
    // Fetch user profile data from MS Graph
    const res = await msGraph(authData).get("/me");
    const profile = res.data;

    const avatar = await this.fetchUserAvatar(authData);

    const user = {
      firstName: profile.givenName,
      lastName: profile.surname,
      displayName: profile.displayName,
      title: profile.jobTitle,
      mobilePhone: profile.mobilePhone,
      businessPhone: profile.businessPhone,
      email: profile.mail,
      microsoftId: profile.id,
      avatar,
    };
    return user;
  }

  async fetchUserAvatar(authData) {
    const res = await msGraph(authData).get("/me/photo/$value");
    const fileExtension = "." + mime.extension(res.headers["content-type"]);
    const imageDataUri = datauri.format(fileExtension, res.data);
    return imageDataUri.content;
  }

  async getProfile (data, params) {
    try {
      const userInfo = await this.fetchOfficeProfile(data);
      return { ...data, userInfo };
    } catch (err) {
      throw new Unavailable("Failed to fetch Office 365 user profile", err);
    }
  }

  getEntityQuery (profile, params) {
    return { email: profile.userInfo.email }
  }

  async getEntityData (profile) {
    // Include the `email` from the GitHub profile when creating
    // or updating a user that logged in with GitHub
    const baseData = await super.getEntityData(profile);

    return {
      ...baseData,
      ...profile
    };
  }

  // async  getCurrentEntity (params) {
  // }

  async createEntity(profile) {
    const user = await super.createEntity(profile.userInfo);
    return user;
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

module.exports = MicrosoftOauthStrategy;
