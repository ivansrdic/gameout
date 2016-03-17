export default {
  redirectOrSetError(err, location) {
    if (err) {
      Session.set('auth-error', err.reason || 'Unknown error');
    } else {
      FlowRouter.goOrRefresh(location);
    }
  }
}