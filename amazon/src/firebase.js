import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCfgCEuNsQDvdo4dvB3dwrkRAv13x9_GfI",
  authDomain: "order-66-af1b3.firebaseapp.com",
  databaseURL: "https://order-66-af1b3.firebaseio.com",
  projectId: "order-66-af1b3",
  storageBucket: "order-66-af1b3.appspot.com",
  messagingSenderId: "392317197889",
  appId: "1:392317197889:web:eaab649c344a962204b0c0",
  measurementId: "G-4PG2SGJ7C1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };