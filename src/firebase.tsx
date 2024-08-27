import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import the Realtime Database
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAamdjhC22u8M26g3gWKrb-N3KuSCjPK-4",
  authDomain: "webpresale.firebaseapp.com",
  databaseURL: "https://webpresale-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webpresale",
  storageBucket: "webpresale.appspot.com",
  messagingSenderId: "1074514143100",
  appId: "1:1074514143100:web:8dccd41af82b570a5ee6f9",
  measurementId: "G-GVKKGFSBF3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp); // Pass the initialized app to getAnalytics

// Initialize Realtime Database
const db = getDatabase(firebaseApp); // Initialize the Realtime Database

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp); // Initialize Firebase Authentication

export { db, auth };
