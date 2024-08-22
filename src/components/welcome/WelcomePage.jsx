
// import  { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase /firebaseConfig";
// import { useNavigate } from "react-router-dom";

// function WelcomePage() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         navigate("/signin");
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   return (
//     <div>
//       {user ? (
//         <h1>Welcome, {user.email}!</h1>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default WelcomePage;
