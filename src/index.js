// import { initializeApp } from 'firebase/app';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyANFrOy8Jy961TLWGuTAjRKt3F7k_aQ5Vo",
    authDomain: "fir-fundamentals-af397.firebaseapp.com",
    projectId: "fir-fundamentals-af397",
    storageBucket: "fir-fundamentals-af397.appspot.com",
    messagingSenderId: "689155749756",
    appId: "1:689155749756:web:a33adf051c0397bcc116f9",
    measurementId: "G-S91JTCT4W8"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
})