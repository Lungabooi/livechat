import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from 'firebase/compat/app'
// import 'firebase/firebase'
// import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCLIeWw1X-xudbD6_9ELaAs95ZsHjV24gc",
    authDomain: "live-chat-c59db.firebaseapp.com",
    projectId: "live-chat-c59db",
    storageBucket: "live-chat-c59db.appspot.com",
    messagingSenderId: "1070540468507",
    appId: "1:1070540468507:web:ff09d65ea44b257b5a23be",
    measurementId: "G-HB2HTGR877"
  };

  // init firebase 
  firebase.initializeApp(firebaseConfig)
  
  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  export { projectFirestore, timestamp, projectAuth }