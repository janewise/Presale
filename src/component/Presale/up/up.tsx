import React from "react";
import "./up.css"
import presaletext from "../imgpresale/PRESALECOUNTDOWN.png"
import coin from "../imgpresale/Logoimage.png"
import glad from "../imgpresale/MythicalGladiator.png"
import Countdown from "./countdown";

export function Up() {
  return (
    <div className="mainUp">
        <div className="upbox1">
            {/* PRESALECOUNTDOWN */}
<div className="presaletext">
    <img src={presaletext} alt="PRESALECOUNTDOWN"/>
</div>
{/* leftcoin and right count down */}
<div className="upbox2">
    <div className="leftcoin">
    <img src={coin} alt="leftcoin"/>
    <img src={glad} alt="MythicalGladiator.png" className="MythicalGladiator"/>
    </div>
    {/* rightcountdown */}
    <div className="rightcountdown">
    <Countdown targetDate="2024-10-31T23:59:59" />
      <div className="countdownbox">
        <h2><span>Total Raised :</span> 0 USDT / 500,000 USDT</h2>
        <h3>43</h3>
      </div>
      <div className="upbox3">
    <h4>Batch Price : $ 0.01</h4>
    <h4>Min Price : $ 15</h4>
    <h4>Max Price : $ 50</h4>
   </div>
    </div>
</div>

{/*  */}
        </div>
</div>
  );
}
