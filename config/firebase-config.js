// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// IMPORTANTE: Substitua estas configurações pelas suas próprias do Firebase Console
// Visite: https://console.firebase.google.com/
const firebaseConfig = {
  apiKey: "AIzaSyDEEwNYA30Jb59CcVvhhsqF1B1hCQ410UM",
  authDomain: "parceiro-be3e9.firebaseapp.com",
  databaseURL: "https://parceiro-be3e9-default-rtdb.firebaseio.com",
  projectId: "parceiro-be3e9",
  storageBucket: "parceiro-be3e9.firebasestorage.app",
  messagingSenderId: "619982778395",
  appId: "1:619982778395:web:25c141958b7c06da02c8be"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
