import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAj6CuyL_rmC0I9tVRXhsiNRaBC-ntMpyE",
    authDomain: "kokoro-a2bf0.firebaseapp.com",
    databaseURL: "https://kokoro-a2bf0.firebaseio.com",
    projectId: "kokoro-a2bf0",
    storageBucket: "kokoro-a2bf0.appspot.com",
    messagingSenderId: "440779738043",
    appId: "1:440779738043:web:aa92afdcacf1ad7906929e"
  };

  
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider};