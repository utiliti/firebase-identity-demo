import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQFD8ItwU7K2NYDqTm0OvbxjLurlqqw38",
  authDomain: "fir-utiliti-burgerdapp.firebaseapp.com",
  projectId: "fir-utiliti-burgerdapp",
  storageBucket: "fir-utiliti-burgerdapp.appspot.com",
  messagingSenderId: "628217334886",
  appId: "1:628217334886:web:30d71d785bcbc9334071a7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
