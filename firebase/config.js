
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
    apiKey: "AIzaSyC4M9yH9weFqtgKe9a0Y2WpMJPVx_Nb5RE",
    authDomain: "mercado-libre-19dae.firebaseapp.com",
    projectId: "mercado-libre-19dae",
    storageBucket: "mercado-libre-19dae.appspot.com",
    messagingSenderId: "439235894891",
    appId: "1:439235894891:web:e3ead5b79acde620ab9b2e"
  };


const app = initializeApp(firebaseConfig)


module.exports = { app }