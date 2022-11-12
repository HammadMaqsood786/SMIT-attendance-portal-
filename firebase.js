  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDk8kDiPVMH04O0-ElAmHFANJpZyL3ew9k",
    authDomain: "attendance-portal-7f68a.firebaseapp.com",
    projectId: "attendance-portal-7f68a",
    storageBucket: "attendance-portal-7f68a.appspot.com",
    messagingSenderId: "986196575160",
    appId: "1:986196575160:web:4ca56974fb7b821f65454d",
    measurementId: "G-7KJRKFR0R6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app);

  function signInFirebase(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  export{
    signInFirebase
   }

  