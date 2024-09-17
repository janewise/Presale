import React, { useEffect, useState } from "react";
import "./up.css"
import presaletext from "../imgpresale/PRESALECOUNTDOWN.png"
import coin from "../imgpresale/Logoimage.png"
import glad from "../imgpresale/MythicalGladiator.png"
import Countdown from "./countdown";
import { db } from "../../../firebase"; // Import Firebase db
import { ref, onValue } from "firebase/database"; // Import necessary Firebase functions


export function Up() {

  const maxTokenR1 = 10000; // Set this to the same value in your database
  const [R1Tokenbuy, setR1Tokenbuy] = useState(0); // State to store current R1Tokenbuy value
  const [percentage, setPercentage] = useState(0); // State for the progress bar percentage

  // Fetch R1Tokenbuy from Firebase
  useEffect(() => {
    const round1Ref = ref(db, "Round1/R1Tokenbuy");

    const unsubscribe = onValue(round1Ref, (snapshot) => {
      const data = snapshot.val();
      setR1Tokenbuy(data || 0); // Update R1Tokenbuy from Firebase, default to 0 if null
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  // Calculate the percentage whenever R1Tokenbuy changes
  useEffect(() => {
    const calculatedPercentage = Math.min((R1Tokenbuy / maxTokenR1) * 100, 100); // Cap at 100%
    setPercentage(calculatedPercentage);
  }, [R1Tokenbuy]);

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
          <h2>
            <span>Total Raised :</span> {R1Tokenbuy} USDT / 10,000 USDT
          </h2>
          <div className="parentbar">
      <div className="childbar"  style={{ width: `${percentage}%` ,backgroundColor:"black", height: '100%',borderRadius:50}}>
      </div>
    </div>
          <h3 className="showpercent">{percentage.toFixed(2)}%</h3>
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
