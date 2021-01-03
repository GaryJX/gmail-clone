import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCHElcZjL_egMfU-1cH4Clcyg3o-qpi4I",
  authDomain: "clone-5a590.firebaseapp.com",
  projectId: "clone-5a590",
  storageBucket: "clone-5a590.appspot.com",
  messagingSenderId: "505499325570",
  appId: "1:505499325570:web:27997687c2c48aa224d09b",
  measurementId: "G-9YHMC2KEJH",
};

const firebaseApp =
  firebase.apps.length > 0
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
