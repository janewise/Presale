import React from "react";
import "./refferal.css"

export function Refferal() {
  return (

  <div className="container-fluid maindiv">
    {/*  */}
    <div className="refermain">
      <h2>Refferral ID</h2>

      <form className="refform">
          <input
            type="text"
            className="refinput"
            placeholder="Enter referrer ID"
            required
          />
        
          <button type="submit" className="referbutton">
            Submit
          </button>
        </form>
    </div>
  </div>
  );
}
