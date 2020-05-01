const MicrosoftOauthStrategy = require('./strategies/microsoft.oauth.strategy.js');
const {
  AuthenticationService,
  JWTStrategy
} = require("@feathersjs/authentication");
const { LocalStrategy } = require("@feathersjs/authentication-local");
const { expressOauth } = require("@feathersjs/authentication-oauth");
const { OAuthStrategy } = require("@feathersjs/authentication-oauth");

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register("jwt", new JWTStrategy());
  authentication.register("local", new LocalStrategy());

  app.use("/authentication", authentication);
  // authentication.register("microsoft", new OAuthStrategy());
  authentication.register("microsoft", new MicrosoftOauthStrategy());
  app.configure(expressOauth());
};
