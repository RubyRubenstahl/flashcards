// import something here
import feathersClient from '../feathers-client'
// "async" is optional
export default async (
  {
  /* app, router, Vue, ... */
    router
  }
) => {
  // something to do

  // Redirect to first run sequence if the app hasn't been initialized
  feathersClient
    .service("app-info")
    .get("public")
    .then(info => {
      console.log(info);
      if (info.isFirstRun) {
        console.log("First run. Routing to setup");
        router.push("/first-run");
      }
    })
    .catch(err => console.error(err));
};
