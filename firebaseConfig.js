import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAvM6nM2CLvDgIYJyxHIoBXz0gM09s-3tk",
  authDomain: "event-platform-app-dffc0.firebaseapp.com",
  projectId: "event-platform-app-dffc0",
  storageBucket: "Yevent-platform-app-dffc0.appspot.com",
  messagingSenderId: "882345716511",
  appId: "1:882345716511:ios:c55a3c96f5daf891ca1e2a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
