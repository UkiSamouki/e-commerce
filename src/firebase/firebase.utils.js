import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSdI7zd-ykNb4R9ahxRcesjJWRGLI94qI",
  authDomain: "crwn-db-e5b8e.firebaseapp.com",
  databaseURL: "https://crwn-db-e5b8e.firebaseio.com",
  projectId: "crwn-db-e5b8e",
  storageBucket: "crwn-db-e5b8e.appspot.com",
  messagingSenderId: "40119902014",
  appId: "1:40119902014:web:c14e00268a7ab92647166f",
  measurementId: "G-G3DN74DZ4M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
