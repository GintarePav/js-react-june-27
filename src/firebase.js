import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcvHevD_2AemQ26D154iooHYF6eV8Mp44",
  authDomain: "holiday-gallery-react.firebaseapp.com",
  projectId: "holiday-gallery-react",
  storageBucket: "holiday-gallery-react.appspot.com",
  messagingSenderId: "168824197989",
  appId: "1:168824197989:web:43427c779c70cb2b68878c",
};

export const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

export default firebase;
