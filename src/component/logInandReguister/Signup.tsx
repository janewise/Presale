
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { signUpUser } from "../../firebaseFunctions";
// import "./Signup.css";

// export function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [telegramId, setTelegramId] = useState("");
//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [successMessage, setSuccessMessage] = useState(""); // State to hold success message

//   const navigate = useNavigate();

//   const validateEmail = (email: string) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     let formIsValid = true;
//     let errors = {
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };

//     if (!validateEmail(email)) {
//       formIsValid = false;
//       errors.email = "Please enter a valid email address.";
//     }

//     if (password.length < 6) {
//       formIsValid = false;
//       errors.password = "Password must be at least 6 characters long.";
//     }

//     if (password !== confirmPassword) {
//       formIsValid = false;
//       errors.confirmPassword = "Passwords do not match.";
//     }

//     setErrors(errors);

//     if (formIsValid) {
//       try {
//         const user = await signUpUser(email, password, telegramId);
//         console.log("User signed up:", user);

//         // Set a success message
//         setSuccessMessage("Sign up successful! A verification email has been sent to your inbox.");

//         // Optionally redirect to the sign-in page
//         navigate("/signin");
//       } catch (error) {
//         if (error instanceof Error) {
//           setErrors({ ...errors, email: "Error: email already in use" });
//         } else {
//           setErrors({ ...errors, email: "An unknown error occurred." });
//         }
//       }
//     }
//   };

//   return (
//     <div className="SignUp-main">
//       <div className="signUp-container">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="Up-form-group">
//             <input
//               type="number"
//               id="Telegram_id"
//               className="Up-form-control"
//               placeholder="Telegram ID"
//               value={telegramId}
//               onChange={(e) => setTelegramId(e.target.value)}
//               required
//             />
//           </div>
//           <div className="Up-form-group">
//             <input
//               type="email"
//               id="email"
//               className="Up-form-control"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="Up-form-group">
//             <input
//               type="password"
//               id="password"
//               className="Up-form-control"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="Up-form-group">
//             <input
//               type="password"
//               id="confirmPassword"
//               className="Up-form-control"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//             {errors.password && <p className="error" style={{ color: "red" }}>{errors.password}</p>}
//             {errors.email && <p className="error" style={{ color: 'red' }}>{errors.email}</p>}
//             {errors.confirmPassword && (
//               <p className="error" style={{ color: 'red' }}>{errors.confirmPassword}</p>
//             )}
//           </div>
//           {successMessage && <p className="success" style={{ color: "green" }}>{successMessage}</p>}
//           <button type="submit" className="btn btn-primary signupbtn">
//             Sign Up
//           </button>
//         </form>
//         <p className="signupbtn">
//           Already have an account? <NavLink to="/signin">Sign In</NavLink>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../firebaseFunctions";
import "./Signup.css";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [UsernameId, setUsernameId] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); 
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let formIsValid = true;
    let errors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!validateEmail(email)) {
      formIsValid = false;
      errors.email = "Please enter a valid email address.";
    }

    if (password.length < 6) {
      formIsValid = false;
      errors.password = "Password must be at least 6 characters long.";
    }

    if (password !== confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = "Passwords do not match.";
    }

    setErrors(errors);

    if (formIsValid) {
      try {
        const user = await signUpUser(email, password, UsernameId);
        console.log("User signed up:", user);

        // Set success message and show modal
        setSuccessMessage("Sign up successful! A verification email has been sent to your inbox.");
        setShowModal(true); // Show the modal after successful sign up

      } catch (error) {
        if (error instanceof Error) {
          setErrors({ ...errors, email: "Error: email already in use" });
        } else {
          setErrors({ ...errors, email: "An unknown error occurred." });
        }
      }
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    navigate("/signin");
  };

  return (
    <div className="SignUp-main">
      <div className="signUp-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="Up-form-group">
            <input
              type="string"
              id="Telegram_id"
              className="Up-form-control"
              placeholder="UserName"
              value={UsernameId}
              onChange={(e) => setUsernameId(e.target.value)}
              required
            />
          </div>
          <div className="Up-form-group">
            <input
              type="email"
              id="email"
              className="Up-form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="Up-form-group">
            <input
              type="password"
              id="password"
              className="Up-form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="Up-form-group">
            <input
              type="password"
              id="confirmPassword"
              className="Up-form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error" style={{ color: "red" }}>{errors.password}</p>}
            {errors.email && <p className="error" style={{ color: 'red' }}>{errors.email}</p>}
            {errors.confirmPassword && (
              <p className="error" style={{ color: 'red' }}>{errors.confirmPassword}</p>
            )}
          </div>
          {successMessage && <p className="success" style={{ color: "green" }}>{successMessage}</p>}
          <button type="submit" className="btn btn-primary signupbtn">
            Sign Up
          </button>
        </form>
        <p className="signupbtn">
          Already have an account? <NavLink to="/signin">Sign In</NavLink>
        </p>
      </div>

      {/* Modal for verification message */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Verification Required</h3>
            <p>A verification email has been sent to your inbox. Please verify your email before logging in.</p>
            <button onClick={handleCancel} className="btn btn-secondary">Yes</button>
          </div>
        </div>
      )}
    </div>
  );
}
