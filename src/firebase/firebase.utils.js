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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(additionalData);
    console.log(userAuth);

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
