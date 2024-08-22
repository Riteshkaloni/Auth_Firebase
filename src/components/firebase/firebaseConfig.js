import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfFUuO_16XMmqWaF0eSWVr_guEJhiWRrg",
  authDomain: "new-project-ece77.firebaseapp.com",
  projectId: "new-project-ece77",
  storageBucket: "new-project-ece77.appspot.com",
  messagingSenderId: "562149835721",
  appId: "1:562149835721:web:93d46282dfd9579f1b1e18",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
