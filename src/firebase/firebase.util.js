import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyC7yfsNb2s6k3mjXtboHvFSLe9bOe5Cg8Y",
    authDomain: "clothing-dbb72.firebaseapp.com",
    projectId: "clothing-dbb72",
    storageBucket: "clothing-dbb72.appspot.com",
    messagingSenderId: "980040257447",
    appId: "1:980040257447:web:1a7e43c2a57082358d7082",
    measurementId: "G-8NB24D5N1D"
  };

  firebase.initializeApp(config);
  export const firestore = firebase.firestore();
  export const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => (auth.signInWithPopup(provider));

  export default firebase;