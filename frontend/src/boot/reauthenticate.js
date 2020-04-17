// Checks for an existing JWT stored in the vuex store
// If it exists, dispatch the feathers-vuex authenticate action
// then redirect to the 
export default async (opts) => {
  const { store, router, redirect, urlPath } = opts;
  
  const redirectUrl = urlPath;
  const auth = store.state.auth;
  if (auth && auth.accessToken) {
    console.log('Reauthenticating')
    const pendingRoute = router.history.pending;
    const redirectRoute =  pendingRoute ? pendingRoute.fullPath : "/app";
    store
      .dispatch("auth/authenticate", {
        strategy: "jwt",
        username: auth.username,
        accessToken: auth.accessToken
      })
      .then(res => {
        console.log(`Reauthentication successful. Redirecting to ${redirectRoute}`)   
        
        router.push(redirectRoute);
      }).catch(err => {
        console.error('Reauthentication failed. Redirecting to login.');
        router.push('/login');
      });
  }
}
