export default {
  completeSetup(userData) {
    console.log(userData);
    Characters.insert(userData, function(err) {
      console.log(err);
    });
  }
}