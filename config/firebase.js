import { initializeApp } from "firebase/app";
import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAxM6GuNd8GsZ_mACYqCN5tvBZacmsvN8k",
  authDomain: "food-decide-app.firebaseapp.com",
  projectId: "food-decide-app",
  storageBucket: "food-decide-app.appspot.com",
  messagingSenderId: "787884550703",
  appId: "1:787884550703:web:bb641015525666042c74da",
  measurementId: "G-ZEEP78W1PZ"
};

initializeApp(firebaseConfig);
const auth =  getAuth();
export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}