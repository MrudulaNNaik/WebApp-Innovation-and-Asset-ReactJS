import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyD4LTSKanRuVbi4VUDHZ92YbNS0HXeWG-g",
//   authDomain: "dxc-f0bef.firebaseapp.com",
//   databaseURL: "https://dxc-f0bef-default-rtdb.firebaseio.com",
//   projectId: "dxc-f0bef",
//   storageBucket: "dxc-f0bef.appspot.com",
//   messagingSenderId: "794255512580",
//   appId: "1:794255512580:web:26a2712b148c2b4a75d151",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBUrSfx7x7GzbwDQhU7SXqCE9lcfV303b8",
  authDomain: "user-41f91.firebaseapp.com",
  databaseURL: "https://user-41f91-default-rtdb.firebaseio.com",
  projectId: "user-41f91",
  storageBucket: "user-41f91.appspot.com",
  messagingSenderId: "473586868052",
  appId: "1:473586868052:web:3ecdf3ac5885bee82472c1",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAYJvKleQWx2yNsXEHZthvaWU8TDK9VKkw",

//   authDomain: "user-profile-f1746.firebaseapp.com",

//   databaseURL: "https://user-profile-f1746-default-rtdb.firebaseio.com",

//   projectId: "user-profile-f1746",

//   storageBucket: "user-profile-f1746.appspot.com",

//   messagingSenderId: "1071654995519",

//   appId: "1:1071654995519:web:93d1941af5dcee4af79a8a",
// };

//firebase.initializeApp(firebaseConfig);
// export default firebase;

const fireDb = firebase.initializeApp(firebaseConfig);

export default firebase;
// export default fireDb.database().ref();
