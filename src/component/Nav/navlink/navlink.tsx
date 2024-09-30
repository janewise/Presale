import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Navlink() {

  const location = useLocation();

  const isDropdownActive = location.pathname === "/nftstake" || location.pathname === "/nft";

  return (
  <>
    <ul className="navbar-nav justify-content-evenly flex-grow-1 ps-3">

           
          <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>Home</NavLink>
          </li>
        
          <li className="nav-item">
          <NavLink to="/presale" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>PreSale</NavLink>
          </li>
          {/* <li className="nav-item">
          <NavLink to="/nft" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>NFT</NavLink>
          </li> */}
          <li className="nav-item dropdown">
          <a className={`nav-link dropdown-toggle ${isDropdownActive ? "active" : ""}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            NFT
          </a>
          <ul className="dropdown-menu">
            <NavLink to="/nft" className={({ isActive }) => isActive ? "link active nav-link dropdown-item" : "link nav-link dropdown-item"}>NFT Sale</NavLink>
            <NavLink to="/nftstake" className={({ isActive }) => isActive ? "link active nav-link dropdown-item" : "link nav-link dropdown-item"}>NFT STake</NavLink>
          </ul>
        </li>
          <li className="nav-item">
          <NavLink to="/tx" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>Tx</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/roadmap" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>Roadmap</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/refferal" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>Refferal</NavLink>
          </li>
          
          </ul>
  </>
  );
}

