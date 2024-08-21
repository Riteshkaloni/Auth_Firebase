// src/components/Login.js
import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { collection, doc, setDoc } from "firebase/firestore";
import SignUp from '../signup/SignUp';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userRef = doc(collection(db, "auth"));



  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      await setDoc(userRef, email, password);

      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (err) {
console.log(err)
    }
  };

// Add a new document with a generated id

// later...

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
<p>New Here!! U need to SignUp First </p>
      <Link to="/signup">
            <button type="button">
              Sign Up
            </button>
          </Link>
    </div>
  );
};

export default Login;