import React from "react";
import { NavLink } from "react-router-dom";

export function Navlink() {
  return (
  <>
    <ul className="navbar-nav justify-content-evenly flex-grow-1 ps-3">

           
          <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>Home</NavLink>
          </li>
        
          <li className="nav-item">
          <NavLink to="/presale" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>PreSale</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/nft" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>NFT</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/tx" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>Tx</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/refferal" className={({ isActive }) => isActive ? "link active nav-link" : "link nav-link"}>Refferal</NavLink>
          </li>
          </ul>
  </>
  );
}
