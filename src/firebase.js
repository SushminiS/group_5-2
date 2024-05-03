import { initializeApp } from "firebase/app";
import {getfirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCpsqhs4WQytJSDPjEEfwA7ICLWO9OrnbE",
  authDomain: "reactapp-2631b.firebaseapp.com",
  projectId: "reactapp-2631b",
  storageBucket: "reactapp-2631b.appspot.com",
  messagingSenderId: "254514901319",
  appId: "1:254514901319:web:07ca31c4c6d396e398dc62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getfirestore(app);