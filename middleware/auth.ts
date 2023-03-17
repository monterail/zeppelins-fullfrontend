export default defineNuxtRouteMiddleware((to) => {
  // TODO check for auth
  if (to.query.auth === 'false') {
    return abortNavigation();
  }
});
