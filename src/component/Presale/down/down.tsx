import React from "react";
import "./down.css"


export function Down() {
  return (
    <div className="downmain">
       <div className="downbox1">
        <h3 style={{fontSize:'42px',marginTop:'2rem',fontWeight:"400",marginBottom:'1rem'}}>Buy Presale</h3>
        <form className="custom-form">
  <div className="form-group">
    <label htmlFor="saleemail">Email : </label>
    <input type="email" id="saleemail" name="saleemail" />
    <br /><br />
    <label htmlFor="saleTid">Telegram ID: </label>
    <input type="number" id="saleTid" name="saleTid" />
    <br /><br />
    <label htmlFor="saleusdt">Usdt : </label>
    <input type="number" id="saleusdt" name="saleusdt" />
    <br /><br />
    <label htmlFor="salemyg">MYG : </label>
    <input type="number" id="salemyg" name="salemyg" />
    <button type="submit" className="submit-btn">Submit</button>
  </div>
</form>

</div>
    </div>
   
  );
}
