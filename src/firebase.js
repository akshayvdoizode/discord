import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZcud0orbTGOMPOz-fFOAD3kHELkswPOQ",
    authDomain: "discord-clone-989.firebaseapp.com",
    databaseURL: "https://discord-clone-989.firebaseio.com",
    projectId: "discord-clone-989",
    storageBucket: "discord-clone-989.appspot.com",
    messagingSenderId: "846372534330",
    appId: "1:846372534330:web:863279c42426041cbc5d03",
    measurementId: "G-Y4LK7LC85E"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;