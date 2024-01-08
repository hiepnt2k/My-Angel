export default function ({ route, app, store, $auth, redirect }) {
  if (route.path === "/") {
    if (!store.$auth.$state.loggedIn) {
      return app.router.replace({
        path: "/login/",
      });
    }
    return app.router.replace({
      path: "/dashboard",
    });
  }
}
