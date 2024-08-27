import React from "react";
import "./mup.css"
import presaletext from "../imgpresale/PRESALECOUNTDOWN.png"
import coin from "../imgpresale/Logoimage.png"
import glad from "../imgpresale/MythicalGladiator.png"
import Countdown from "./countdown";

export function Mup() {
  return (
    <div className="mainMup">
        <div className="mupbox1">
            {/* PRESALECOUNTDOWN */}
<div className="mpresaletext">
    <img src={presaletext} alt="PRESALECOUNTDOWN"/>
</div>
{/* leftcoin and right count down */}
<div className="mupbox2">
    <div className="mleftcoin">
    <img src={coin} alt="mleftcoin"/>
    <img src={glad} alt="MythicalGladiator.png" className="mMythicalGladiator"/>
    </div>
    {/* rightcountdown */}
    <div className="mrightcountdown">
    <Countdown targetDate="2024-10-31T23:59:59" />   
    </div>
    
</div>
{/*  */}
    <div className="mcountdownbox">
        <h2><span>Total Raised :</span> 0 USDT / 500,000 USDT</h2>
        <h3>43</h3>
      </div>
        </div>

        <div className="mupbox3">
    <h4>Batch Price : $ 0.01</h4>
    <h4>Min Price : $ 15</h4>
    <h4>Max Price : $ 50</h4>
   </div>
</div>
  );
}
