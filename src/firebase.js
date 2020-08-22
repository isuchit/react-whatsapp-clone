import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC5nCW__5sj1pf2_bKR_-8e33r7oUjVVYc",
    authDomain: "whatsapp-clone-6376a.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-6376a.firebaseio.com",
    projectId: "whatsapp-clone-6376a",
    storageBucket: "whatsapp-clone-6376a.appspot.com",
    messagingSenderId: "85693603434",
    appId: "1:85693603434:web:261ccfd5f408beb0773413",
    measurementId: "G-DKLJ2DME4V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;