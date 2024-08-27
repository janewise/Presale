// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Navlink } from "./navlink/navlink";
// import "./Nav.css"
// import logo from "./img/Myg.png"

// export function Nav() {
//   return (
//     <nav className="navbar navbar-expand-md Navbgcolor">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="#">
//         <img src={logo} alt="logo" width={70} height={40}/>
//       </a>

//       {/* toggle */}
//       <div className="toggle_box">
//         <div>
//         <NavLink to="/signin">
//         <button className="signIn">
//           Sign In
//         </button>
//         </NavLink>
//         </div>
//       <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       </div>
//       {/*  */}
//       <div className="offcanvas offcanvas-end" tab-Index="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//         <div className="offcanvas-header">
//         <img src={logo} alt="logo" width={60} height={30}/>
//           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//         <Navlink/>
//         </div>
//       </div>
//     </div>
//   </nav>
//   );
// }

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase"; // Import the auth instance from Firebase
import { onAuthStateChanged, User } from "firebase/auth"; // Import the User type and auth state function
import { Navlink } from "./navlink/navlink";
import "./Nav.css";
import logo from "./img/Myg.png";

export function Nav() {
  const [user, setUser] = useState<User | null>(null); // Use the imported User type

  useEffect(() => {
    // Listen for changes to the user's sign-in state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar navbar-expand-md Navbgcolor">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width={70} height={40} />
        </a>

        {/* toggle */}
        <div className="toggle_box">
          <div>
            {user ? (
              <NavLink to="/profile">
                <button className="profile-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                </button>
              </NavLink>
            ) : (
              <NavLink to="/signin">
                <button className="signIn">Sign In</button>
              </NavLink>
            )}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/*  */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <img src={logo} alt="logo" width={60} height={30} />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Navlink />
          </div>
        </div>
      </div>
    </nav>
  );
}
