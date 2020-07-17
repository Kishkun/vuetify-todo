import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDNsewYDyWL9ZE_KP68CqyqGi3Ms4Aw4gU",
  authDomain: "vuetify-kishkun.firebaseapp.com",
  databaseURL: "https://vuetify-kishkun.firebaseio.com",
  projectId: "vuetify-kishkun",
  storageBucket: "vuetify-kishkun.appspot.com",
  messagingSenderId: "250579176043",
  appId: "1:250579176043:web:e17136daa3400cde127f2e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;