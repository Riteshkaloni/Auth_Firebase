import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvL2GHgEvrIfP8NCLRRBJkItv2_xkEzG0",
  authDomain: "login-singup-234b3.firebaseapp.com",
  projectId: "login-singup-234b3",
  storageBucket: "login-singup-234b3.appspot.com",
  messagingSenderId: "717100211922",
  appId: "1:717100211922:web:5285e142d1e764c78dd70b"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;