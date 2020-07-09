import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5hnJs5htcYik3cq74cybqnUl7KrJNGyw",
    authDomain: "todo-app-c8f29.firebaseapp.com",
    databaseURL: "https://todo-app-c8f29.firebaseio.com",
    projectId: "todo-app-c8f29",
    storageBucket: "todo-app-c8f29.appspot.com",
    messagingSenderId: "475104595529",
    appId: "1:475104595529:web:0060636105f2f2d256b998"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  
  export { db }