// import React from 'react';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
// import { Nav } from './component/Nav/Nav';
// import { Home } from './component/Home/home';
// import { Presale } from './component/Presale/presale';
// import { Nft } from './component/Nft/nft';
// import {Tx} from "./component/Tx/tx"
// import { Refferal } from './component/Refferal/refferal';


// import './App.css';

// function App() {
//   return (
//     <>
//     <Router>
//       <Nav />
//         <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/presale" element={<Presale />}/>
//         <Route path="/nft" element={<Nft />}/>
//         <Route path="/tx" element={<Tx />}/>
//         <Route path="/refferal" element={<Refferal />}/>
//         </Routes>
//      </Router>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Nav } from './component/Nav/Nav';
import { Home } from './component/Home/home';
import { Presale } from './component/Presale/presale';
// import { Nft } from './component/Nft/nft';
// import  NftStake from "./component/NftStake/nftstake";
import {Tx} from "./component/Tx/tx"
import { Refferal } from './component/Refferal/refferal';
import { SignIn } from "./component/logInandReguister/Signin";
import { SignUp } from "./component/logInandReguister/Signup";
import { Resetpass } from "./component/logInandReguister/resetpassword";
import Userprofile from "./component/logInandReguister/userprofile";
import "./App.css"
import { AuthProvider } from "./auth";
import { initializeRound1} from "./firebaseFunctions"; 
import { initializeRound2} from "./firebaseFunctions"; 
import { initializeRound3} from "./firebaseFunctions"; 
import { Roadmap } from "./component/Roadmap/roadmap";
import { WPaper } from "./component/Wpaper/wpaper";

function App() {
  const location = useLocation();
  
    // Call the Round1 initialization on app start
    useEffect(() => {
      initializeRound1();
    }, []);
    useEffect(() => {
      initializeRound2();
    }, []);
    useEffect(() => {
      initializeRound3();
    }, []);

  // Determine if the current route should hide the Nav component
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup" || location.pathname === "/resetpass";

  return (
    <>
      {!isAuthPage && <Nav />} {/* Show Nav only if not on SignIn or SignUp pages */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpass" element={<Resetpass />} />
        {/* Add other routes */}
        <Route path="/" element={<Home />}/>
        <Route path="/presale" element={<Presale />}/>
        {/* <Route path="/nft" element={<Nft />}/> */}
        {/* <Route path="/nftstake" element={<NftStake />}/> */}
        <Route path="/tx" element={<Tx />}/>
        <Route path="/refferal" element={<Refferal />}/>
        <Route path="/profile" element={<Userprofile />}/>
        <Route path="/whitepaper" element={<WPaper />}/>
        <Route path="/roadmap" element={<Roadmap />}/>
      </Routes>
    </>
  );
}

export default function RootApp() {
  return (
    <Router>
      <AuthProvider><App /></AuthProvider>
    </Router>
  );
}
