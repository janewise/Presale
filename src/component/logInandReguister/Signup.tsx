// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Signup.css"

// export function SignUp() {
//   return (
//     <div className="SignUp-main">
//     <div className="signUp-container">
//       <h2>Sign Up</h2>
//       <form>
//       <div className="Up-form-group">
//           <input type="number" id="Telegram_id" className="In-form-control" placeholder="Telegram ID" required/>
//         </div>
//         <div className="Up-form-group">
//           <input type="email" id="email" className="Up-form-control" placeholder="Email" required/>
//         </div>
//         <div className="Up-form-group">
//           <input type="password" id="password" className="Up-form-control" placeholder="Password" required/>
//         </div>
//         <div className="Up-form-group">
//           <input type="password" id="password" className="Up-form-control" placeholder="Confrim Password" required/>
//         </div>
//         <button type="submit" className="btn btn-primary signupbtn">Sign Up</button>
//       </form>
//       <p className="signupbtn">
//         Already have an account? <NavLink to="/signin">Sign In</NavLink>
//       </p>
//     </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Signup.css";

// export function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const validateEmail = (email: string) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     let formIsValid = true;
//     let errors = {
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };

//     // Email validation
//     if (!validateEmail(email)) {
//       formIsValid = false;
//       errors.email = "Please enter a valid email address.";
//     }

//     // Password validation
//     if (password.length < 6) {
//       formIsValid = false;
//       errors.password = "Password must be at least 6 characters long.";
//     }

//     // Confirm password validation
//     if (password !== confirmPassword) {
//       formIsValid = false;
//       errors.confirmPassword = "Passwords do not match.";
//     }

//     setErrors(errors);

//     if (formIsValid) {
//       // Handle successful form submission here
//       console.log("Form submitted successfully");
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
//             {errors.email && <p className="error">{errors.email}</p>}
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
//             {errors.password && <p className="error" style={{color:"red"}}>{errors.password}</p>}
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
//             {errors.confirmPassword && (
//               <p className="error">{errors.confirmPassword}</p>
//             )}
//           </div>
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

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { signUpUser } from "../../firebaseFunctions"; // Import the sign-up function
// import "./Signup.css";

// export function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const validateEmail = (email: string) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   let formIsValid = true;
//   //   let errors = {
//   //     email: "",
//   //     password: "",
//   //     confirmPassword: "",
//   //   };

//   //   // Email validation
//   //   if (!validateEmail(email)) {
//   //     formIsValid = false;
//   //     errors.email = "Please enter a valid email address.";
//   //   }

//   //   // Password validation
//   //   if (password.length < 6) {
//   //     formIsValid = false;
//   //     errors.password = "Password must be at least 6 characters long.";
//   //   }

//   //   // Confirm password validation
//   //   if (password !== confirmPassword) {
//   //     formIsValid = false;
//   //     errors.confirmPassword = "Passwords do not match.";
//   //   }

//   //   setErrors(errors);

//   //   if (formIsValid) {
//   //     try {
//   //       const user = await signUpUser(email, password);
//   //       console.log("User signed up:", user);
//   //       // Redirect or update UI as needed
//   //     } catch (error) {
//   //       console.error("Sign up error:", error);
//   //       setErrors({ ...errors, email: error.message }); // Display error
//   //     }
//   //   }
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     let formIsValid = true;
//     let errors = {
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };
  
//     // Email validation
//     if (!validateEmail(email)) {
//       formIsValid = false;
//       errors.email = "Please enter a valid email address.";
//     }
  
//     // Password validation
//     if (password.length < 6) {
//       formIsValid = false;
//       errors.password = "Password must be at least 6 characters long.";
//     }
  
//     // Confirm password validation
//     if (password !== confirmPassword) {
//       formIsValid = false;
//       errors.confirmPassword = "Passwords do not match.";
//     }
  
//     setErrors(errors);
  
//     if (formIsValid) {
//       try {
//         const user = await signUpUser(email, password);
//         console.log("User signed up:", user);
//         // Redirect or update UI as needed
//       } catch (error) {
//         if (error instanceof Error) {
//           setErrors({ ...errors, email: error.message });
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
//             {errors.password && <p className="error" style={{ color: "red" }}>{errors.password}</p>}
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
//             F{errors.email && <p className="error">{errors.email}</p>}
//             {errors.confirmPassword && (
//               <p className="error">{errors.confirmPassword}</p>
//             )}
//           </div>
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

// //03
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { signUpUser } from "../../firebaseFunctions"; // Import the sign-up function
// import "./Signup.css";

// export function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [telegramId, setTelegramId] = useState(""); // Add state for Telegram ID
//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const navigate = useNavigate(); // Initialize useNavigate

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

//     // Email validation
//     if (!validateEmail(email)) {
//       formIsValid = false;
//       errors.email = "Please enter a valid email address.";
//     }

//     // Password validation
//     if (password.length < 6) {
//       formIsValid = false;
//       errors.password = "Password must be at least 6 characters long.";
//     }

//     // Confirm password validation
//     if (password !== confirmPassword) {
//       formIsValid = false;
//       errors.confirmPassword = "Passwords do not match.";
//     }

//     setErrors(errors);

//     if (formIsValid) {
//       try {
//         const user = await signUpUser(email, password, telegramId); // Pass telegramId to the sign-up function
//         console.log("User signed up:", user);
//         // Redirect or update UI as needed
//         navigate("/signin");
//       } catch (error) {
//         if (error instanceof Error) {
//           // setErrors({ ...errors, email: error.message });
//           setErrors({ ...errors, email:"Error:email already in use" });
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
//              {errors.password && <p className="error" style={{color:"red"}}>{errors.password}</p>}
//               {errors.email && <p className="error" style={{color:'red'}}>{errors.email}</p>}
//             {errors.confirmPassword && (
//               <p className="error" style={{color:'red'}}>{errors.confirmPassword}</p>
//             )}
//           </div>
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
  const [telegramId, setTelegramId] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State to hold success message

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
        const user = await signUpUser(email, password, telegramId);
        console.log("User signed up:", user);

        // Set a success message
        setSuccessMessage("Sign up successful! A verification email has been sent to your inbox.");

        // Optionally redirect to the sign-in page
        navigate("/signin");
      } catch (error) {
        if (error instanceof Error) {
          setErrors({ ...errors, email: "Error: email already in use" });
        } else {
          setErrors({ ...errors, email: "An unknown error occurred." });
        }
      }
    }
  };

  return (
    <div className="SignUp-main">
      <div className="signUp-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="Up-form-group">
            <input
              type="number"
              id="Telegram_id"
              className="Up-form-control"
              placeholder="Telegram ID"
              value={telegramId}
              onChange={(e) => setTelegramId(e.target.value)}
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
    </div>
  );
}
