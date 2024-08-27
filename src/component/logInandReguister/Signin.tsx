
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { ref, get } from "firebase/database";
import { getDatabase } from "firebase/database";
import { NavLink } from "react-router-dom";
import "./Signin.css";

export function SignIn() {
  // Existing state declarations...
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const db = getDatabase();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError("Please verify your email before signing in.");
        return;
      }

      const userRef = ref(db, 'users/' + user.uid);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();

        if (userData.telegramId !== telegramId) {
          setError("Telegram ID does not match.");
          return;
        }

        navigate("/");
      } else {
        setError("User data not found.");
      }
    } catch (error) {
      setError("Wrong Password or Email");
    }
  };

  
  return (
    <div className="SignIn-main">
      <div className="signIn-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="In-form-group">
            <input
              type="number"
              id="Telegram_id"
              className="In-form-control"
              placeholder="Telegram ID"
              value={telegramId}
              onChange={(e) => setTelegramId(e.target.value)}
              required
            />
          </div>
          <div className="In-form-group">
            <input
              type="email"
              id="email"
              className="In-form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="In-form-group">
            <input
              type="password"
              id="password"
              className="In-form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error" style={{color:'red'}}>{error}</p>} {/* Display error if any */}
          <button type="submit" className="btn btn-primary signinbtn">
            Sign In
          </button>
        </form>
        <p className="signinbtn">
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
        <p className="signinbtn">
          Forget Password? <NavLink to="/resetpass">Reset Password</NavLink>
        </p>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../../firebase";
// import { ref, get } from "firebase/database";
// import { getDatabase } from "firebase/database";
// import { NavLink } from "react-router-dom";
// import "./Signin.css";

// export function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [telegramId, setTelegramId] = useState("");
//   const [error, setError] = useState("");
//   const [resetEmailSent, setResetEmailSent] = useState(false); // For password reset confirmation

//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const db = getDatabase();

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       if (!user.emailVerified) {
//         setError("Please verify your email before signing in.");
//         return;
//       }

//       const userRef = ref(db, 'users/' + user.uid);
//       const snapshot = await get(userRef);

//       if (snapshot.exists()) {
//         const userData = snapshot.val();

//         if (userData.telegramId !== telegramId) {
//           setError("Telegram ID does not match.");
//           return;
//         }

//         navigate("/");
//       } else {
//         setError("User data not found.");
//       }
//     } catch (error) {
//       setError("Wrong Password or Email");
//     }
//   };

//   const handleResetPassword = async () => {
//     if (!email) {
//       setError("Please enter your email to reset your password.");
//       return;
//     }

//     try {
//       await sendPasswordResetEmail(auth, email);
//       setResetEmailSent(true);
//       setError(""); // Clear any previous error
//     } catch (error) {
//       setError("Failed to send reset email. Please check your email address.");
//     }
//   };

//   return (
//     <div className="SignIn-main">
//       <div className="signIn-container">
//         <h2>Sign In</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="In-form-group">
//             <input
//               type="number"
//               id="Telegram_id"
//               className="In-form-control"
//               placeholder="Telegram ID"
//               value={telegramId}
//               onChange={(e) => setTelegramId(e.target.value)}
//               required
//             />
//           </div>
//           <div className="In-form-group">
//             <input
//               type="email"
//               id="email"
//               className="In-form-control"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="In-form-group">
//             <input
//               type="password"
//               id="password"
//               className="In-form-control"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="error" style={{ color: 'red' }}>{error}</p>} {/* Display error if any */}
//           {resetEmailSent && <p className="success" style={{ color: 'green' }}>Reset email sent! Check your inbox.</p>} {/* Confirmation for reset email */}
//           <button type="submit" className="btn btn-primary signinbtn">
//             Sign In
//           </button>
//         </form>
//         <p className="signinbtn">
//           Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
//         </p>
//         <p className="forgot-password" style={{ marginTop: '10px' }}>
//           Forgot password?{" "}
//           <button onClick={handleResetPassword} className="btn-link reset-password-btn">
//             Reset Password
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

