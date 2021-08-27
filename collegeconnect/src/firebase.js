// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfCntMDwcwbWeuFLQ5B2kFPLYyXs42InQ",
  authDomain: "collegeconnect-79899.firebaseapp.com",
  projectId: "collegeconnect-79899",
  storageBucket: "collegeconnect-79899.appspot.com",
  messagingSenderId: "1083075896802",
  appId: "1:1083075896802:web:2e9709b0cebe4696a145bb",
  measurementId: "G-5JVB5818BT"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {  auth, provider };
  export default db;