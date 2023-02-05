import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbCnNvNGrjSnZeXftX2yGfoeNrZZeYRA4",
  authDomain: "cisposiamo-71cf9.firebaseapp.com",
  databaseURL: "https://cisposiamo-71cf9-default-rtdb.firebaseio.com",
  projectId: "cisposiamo-71cf9",
  storageBucket: "cisposiamo-71cf9.appspot.com",
  messagingSenderId: "1013461212856",
  appId: "1:1013461212856:web:9f0c91f4f1026aef6ede4d",
  measurementId: "G-FGWRLW0WS9",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
