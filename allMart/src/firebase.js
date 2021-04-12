import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgU_5FHPKs9OT1OMJRwUEYA9Em_Js7Q30",
  authDomain: "ecomm-91dff.firebaseapp.com",
  projectId: "ecomm-91dff",
  storageBucket: "ecomm-91dff.appspot.com",
  messagingSenderId: "1059291713133",
  appId: "1:1059291713133:web:4677739a0c9aee570a3964",
  measurementId: "G-XXHBGVSVYX"
};
  


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db,auth};