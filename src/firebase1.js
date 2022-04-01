import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUrSfx7x7GzbwDQhU7SXqCE9lcfV303b8",
  authDomain: "user-41f91.firebaseapp.com",
  databaseURL: "https://user-41f91-default-rtdb.firebaseio.com",
  projectId: "user-41f91",
  storageBucket: "user-41f91.appspot.com",
  messagingSenderId: "473586868052",
  appId: "1:473586868052:web:3ecdf3ac5885bee82472c1",
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default firebase;
// export default fireDb.database().ref();
