// import React from "react";
// import "./mup.css"
// import presaletext from "../imgpresale/PRESALECOUNTDOWN.png"
// import coin from "../imgpresale/Logoimage.png"
// import glad from "../imgpresale/MythicalGladiator.png"
// import Countdown from "./countdown";

// export function Mup() {
//   return (
//     <div className="mainMup">
//         <div className="mupbox1">
//             {/* PRESALECOUNTDOWN */}
// <div className="mpresaletext">
//     <img src={presaletext} alt="PRESALECOUNTDOWN"/>
// </div>
// {/* leftcoin and right count down */}
// <div className="mupbox2">
//     <div className="mleftcoin">
//     <img src={coin} alt="mleftcoin"/>
//     <img src={glad} alt="MythicalGladiator.png" className="mMythicalGladiator"/>
//     </div>
//     {/* rightcountdown */}
//     <div className="mrightcountdown">
//     <Countdown targetDate="2024-10-31T23:59:59" />   
//     </div>
    
// </div>
// {/*  */}
//     <div className="mcountdownbox">
//         <h2><span>Total Raised :</span> 0 USDT / 500,000 USDT</h2>
//         <div></div>
//         <h3></h3>
//       </div>
//         </div>

//         <div className="mupbox3">
//     <h4>Batch Price : $ 0.01</h4>
//     <h4>Min Price : $ 15</h4>
//     <h4>Max Price : $ 50</h4>
//    </div>
// </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./mup.css";
import presaletext from "../imgpresale/PRESALECOUNTDOWN.png";
import coin from "../imgpresale/Logoimage.png";
import glad from "../imgpresale/MythicalGladiator.png";
import Countdown from "./countdown";
import { db } from "../../../firebase"; // Import Firebase db
import { ref, onValue } from "firebase/database"; // Import necessary Firebase functions

export function Mup() {
 // const maxTokenR1 = 20000; // Set this to the same value in your database
 // const [R1Tokenbuy, setR1Tokenbuy] = useState(0); // State to store current R1Tokenbuy value
  const maxTokenR2 = 15000; // Set this to the same value in your database
  const [R2Tokenbuy, setR2Tokenbuy] = useState(0); 
  const [percentage, setPercentage] = useState(0); // State for the progress bar percentage

  // // Fetch R1Tokenbuy from Firebase
  // useEffect(() => {
  //   const round1Ref = ref(db, "Round1/R1Tokenbuy");

  //   const unsubscribe = onValue(round1Ref, (snapshot) => {
  //     const data = snapshot.val();
  //     setR1Tokenbuy(data || 0); // Update R1Tokenbuy from Firebase, default to 0 if null
  //   });

  //   return () => unsubscribe(); // Cleanup subscription on component unmount
  // }, []);

   // Fetch R2Tokenbuy from Firebase
   useEffect(() => {
    const round2Ref = ref(db, "Round2/R2Tokenbuy");

    const unsubscribe = onValue(round2Ref, (snapshot) => {
      const data = snapshot.val();
      setR2Tokenbuy(data || 0); // Update R1Tokenbuy from Firebase, default to 0 if null
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  // // Calculate the percentage whenever R1Tokenbuy changes
  // useEffect(() => {
  //   const calculatedPercentage = Math.min((R1Tokenbuy / maxTokenR1) * 100, 100); // Cap at 100%
  //   setPercentage(calculatedPercentage);
  // }, [R1Tokenbuy]);

  // Calculate the percentage whenever R2Tokenbuy changes
  useEffect(() => {
    const calculatedPercentage = Math.min((R2Tokenbuy / maxTokenR2) * 100, 100); // Cap at 100%
    setPercentage(calculatedPercentage);
  }, [R2Tokenbuy]);

  return (
    <div className="mainMup">
      <div className="mupbox1">
        {/* PRESALECOUNTDOWN */}
        <div className="mpresaletext">
          <img src={presaletext} alt="PRESALECOUNTDOWN" />
        </div>
        {/* Left coin and right countdown */}
        <div className="mupbox2">
          <div className="mleftcoin">
            <img src={coin} alt="mleftcoin" />
            <img
              src={glad}
              alt="MythicalGladiator"
              className="mMythicalGladiator"
            />
          </div>
          {/* Right countdown */}
          <div className="mrightcountdown">
            <Countdown targetDate="2024-10-31T23:59:59" />
          </div>
        </div>
        {/* Progress bar and total raised */}
        <div className="mcountdownbox">
          <h2>
            <span>Total Raised :</span> {R2Tokenbuy} USDT / 15,000 USDT
          </h2>
          <div className="mparentbar">
      <div className="childbar"  style={{ width: `${percentage}%` ,background:"linear-gradient(90deg, #1CB2FF 0%, #FF12EF 100%)", height: '100%',borderRadius:50}}>
      </div>
      </div>
          <h3 className="showpercent">{percentage.toFixed(2)}%</h3>
        </div>
      </div>
      <div className="mupbox3">
        <h4>Batch Price : $ 0.02</h4>
        <h4>Min Price : $ 15</h4>
        <h4>Max Price : $ 50</h4>
      </div>
    </div>
  );
}

