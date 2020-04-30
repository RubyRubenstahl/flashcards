const msGraph = require('./lib/ms-graph');
const DataURI = require("datauri");
const datauri = new DataURI();
const mime = require('mime-types');

const {
  AuthenticationService,
  JWTStrategy
} = require("@feathersjs/authentication");
const { LocalStrategy } = require("@feathersjs/authentication-local");
const { expressOauth } = require("@feathersjs/authentication-oauth");

const { OAuthStrategy } = require("@feathersjs/authentication-oauth");


const fetchUserOfficeProfile = async (authData)=>{
    // Fetch user profile data from MS Graph
    const res = await msGraph(authData).get('/me');
    const profile = res.data;
  
    const avatar = await fetchUserAvatar(authData);


    const user = {
      firstName: profile.givenName,
      lastName: profile.surname,
      displayName: profile.displayName,
      title: profile.jobTitle,
      mobilePhone: profile.mobilePhone,
      businessPhone: profile.businessPhone,
      email: profile.mail,
      avatar
  }
  return user;

}

const fetchUserAvatar = async (authData) => {
  const res = await msGraph(authData).get("/me/photo/$value");
  const fileExtension = '.' + mime.extension(res.headers['content-type']);
  const imageDataUri = datauri.format(fileExtension, res.data);
  return imageDataUri;
}

class MicrosoftOauthStrategy extends OAuthStrategy {
  async getProfile (data, params) {
    const userProfile = await fetchUserOfficeProfile(data);
    
    if (data.error) {
      console.error(data);
      console.error(params);
      return;
    }


    // console.log(data);
    return { ...data, userProfile };
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
