"use strict";

let firebase = require("./firebaseConfig"),
    provider = new firebase.auth.GoogleAuthProvider(),
    currentUser = require("./currentUser");

function logInGoogle() {
  return firebase.auth().signInWithPopup(provider);
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("user logged in", user.uid);    // User is signed in.
    currentUser.setUser(user.uid);
  } else {
    console.log("user NOT logged in");          // No user is signed in.
    currentUser.setUser(null);
  }
});

module.exports = logInGoogle;