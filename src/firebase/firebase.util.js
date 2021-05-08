import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD8VSem-W2ELLCVqdEUhrSF85h2zTyPe7Y",
    authDomain: "crwn-db-64b3d.firebaseapp.com",
    projectId: "crwn-db-64b3d",
    storageBucket: "crwn-db-64b3d.appspot.com",
    messagingSenderId: "56190385169",
    appId: "1:56190385169:web:6ad9ede304fe89478bc5b0",
    measurementId: "G-651P1ML8SF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


