import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOd3JQY416WnKKGETru05273azWTvO3sA",
  authDomain: "devathon-9c21d.firebaseapp.com",
  databaseURL: "https://devathon-9c21d-default-rtdb.firebaseio.com",
  projectId: "devathon-9c21d",
  storageBucket: "devathon-9c21d.appspot.com",
  messagingSenderId: "197487760465",
  appId: "1:197487760465:web:b8f2d20dd03996a9125470",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage };
