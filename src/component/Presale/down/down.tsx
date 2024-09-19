// import React from "react";
// import "./down.css"

// export function Down() {
//   return (
//     <div className="downmain">
//        <div className="downbox1">
//         <h3 style={{fontSize:'42px',marginTop:'2rem',fontWeight:"400",marginBottom:'1rem'}}>Buy Presale</h3>
//         <form className="custom-form">
//   <div className="form-group">
//     <label htmlFor="saleemail">Email : </label>
//     <input type="email" id="saleemail" name="saleemail" />
//     <br /><br />
//     <label htmlFor="saleTid">Telegram ID: </label>
//     <input type="number" id="saleTid" name="saleTid" />
//     <br /><br />
//     <label htmlFor="saleusdt">Usdt : </label>
//     <input type="number" id="saleusdt" name="saleusdt" />
//     <br /><br />
//     <label htmlFor="salemyg">MYG : </label>
//     <input type="number" id="salemyg" name="salemyg" />
//     <button type="submit" className="submit-btn">Submit</button>
//   </div>
// </form>

// </div>
//     </div>
   
//   );
// }

// import React, { useState, useEffect } from "react";
// import "./down.css";
// import { ref, get } from "firebase/database"; // Import necessary functions
// import { db } from "../../../firebase"; // Import the Firebase Realtime Database instance
// import {ConnectButton,TransactionButton,useActiveAccount,useReadContract,} from "thirdweb/react";

// export function Down() {

//   const account = useActiveAccount()

//   const [round1Data, setRound1Data] = useState({
//     R1priceusdt: 0,
//     minR1buyusdt: 0,
//     maxR1buyusdt: 0,
//   });

//   const [saleUsdt, setSaleUsdt] = useState<number | "">(0);
//   const [saleMyg, setSaleMyg] = useState<number | "">(0);
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   // Fetch the Round1 data when the component mounts
//   useEffect(() => {
//     const fetchRound1Data = async () => {
//       try {
//         const round1Ref = ref(db, "Round1");
//         const snapshot = await get(round1Ref);

//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           setRound1Data({
//             R1priceusdt: data.R1priceusdt,
//             minR1buyusdt: data.minR1buyusdt,
//             maxR1buyusdt: data.maxR1buyusdt,
//           });
//         } else {
//           console.error("No Round1 data found");
//         }
//       } catch (error) {
//         console.error("Error fetching Round1 data: ", error);
//       }
//     };

//     fetchRound1Data();
//   }, []);

//   // Handle saleusdt change and calculate salemyg
//   const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value);
//     setSaleUsdt(value);
//     if (!isNaN(value)) {
//       setSaleMyg(value / round1Data.R1priceusdt); // Calculate MYG based on the R1priceusdt
//     } else {
//       setSaleMyg("");
//     }
//   };

//   // Handle salemyg change and calculate saleusdt
//   const handleMygChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value);
//     setSaleMyg(value);
//     if (!isNaN(value)) {
//       setSaleUsdt(value * round1Data.R1priceusdt); // Calculate USDT based on MYG and R1priceusdt
//     } else {
//       setSaleUsdt("");
//     }
//   };

//   // Form submission handler
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
  
//     // Ensure saleUsdt is a valid number before comparison
//     const saleUsdtNumber = typeof saleUsdt === "number" ? saleUsdt : parseFloat(saleUsdt as string);
  
//     if (
//       isNaN(saleUsdtNumber) || // Check if it's not a number
//       saleUsdtNumber < round1Data.minR1buyusdt ||
//       saleUsdtNumber > round1Data.maxR1buyusdt
//     ) {
//       setErrorMessage(
//         `USDT amount must be between ${round1Data.minR1buyusdt} and ${round1Data.maxR1buyusdt}`
//       );
//     } else {
//       setErrorMessage(""); // Clear the error message
//       console.log("Form submitted successfully!");
  
//       // You can proceed with the form submission logic here
//       // For example, saving to Firebase or handling the presale logic
//     }
//   };
  
//   return (
//     <div className="downmain">
//       <div className="downbox1">
//         <h3 style={{ fontSize: "42px", marginTop: "2rem", fontWeight: "400", marginBottom: "1rem" }}>Buy Presale</h3>
//         <form className="custom-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="saleemail">Email : </label>
//             <input type="email" id="saleemail" name="saleemail" required/>
//             <br /><br />
//             <label htmlFor="saleTid">Telegram ID: </label>
//             <input type="number" id="saleTid" name="saleTid" required/>
//             <br /><br />
//             <label htmlFor="saleusdt">USDT : </label>
//             <input
//               type="number"
//               id="saleusdt"
//               name="saleusdt"
//               value={saleUsdt}
//               onChange={handleUsdtChange}
//             required/>
//             <br /><br />
//             <label htmlFor="salemyg">MYG : </label>
//             <input
//               type="number"
//               id="salemyg"
//               name="salemyg"
//               value={saleMyg}
//               onChange={handleMygChange}
//             required/>
//             <br /><br />
//             if(account){ <button type="submit" className="submit-btn">Submit</button>}
           
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


//fix1
// import React, { useState, useEffect } from "react";
// import { ref, push, get, update } from "firebase/database"; // Use push for new entries
// import { db } from "../../../firebase"; // Import Firebase
// import { ConnectButton} from "thirdweb/react"; // Import for Metamask connection
// import { useAuth } from "../../../auth"; // Assuming you're using Firebase auth hook
// import "./down.css"

// export function Down() {
//   const { user } = useAuth(); // Get the Firebase Auth user
//   const [round1Data, setRound1Data] = useState({
//     R1priceusdt: 0,
//     minR1buyusdt: 0,
//     maxR1buyusdt: 0,
//   });
  
//   const [saleUsdt, setSaleUsdt] = useState<number | "">(0);
//   const [saleMyg, setSaleMyg] = useState<number | "">(0);
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   // Fetch the Round1 data when the component mounts
//   useEffect(() => {
//     const fetchRound1Data = async () => {
//       try {
//         const round1Ref = ref(db, "Round1");
//         const snapshot = await get(round1Ref);
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           setRound1Data({
//             R1priceusdt: data.R1priceusdt,
//             minR1buyusdt: data.minR1buyusdt,
//             maxR1buyusdt: data.maxR1buyusdt,
//           });
//         } else {
//           console.error("No Round1 data found");
//         }
//       } catch (error) {
//         console.error("Error fetching Round1 data: ", error);
//       }
//     };
//     fetchRound1Data();
//   }, []);

//   // Handle saleusdt change and calculate salemyg
//   const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value);
//     setSaleUsdt(value);
//     if (!isNaN(value)) {
//       setSaleMyg(value / round1Data.R1priceusdt);
//     } else {
//       setSaleMyg("");
//     }
//   };

//   // Handle salemyg change and calculate saleusdt
//   const handleMygChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value);
//     setSaleMyg(value);
//     if (!isNaN(value)) {
//       setSaleUsdt(value * round1Data.R1priceusdt);
//     } else {
//       setSaleUsdt("");
//     }
//   };

//   // Form submission handler
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const saleUsdtNumber = typeof saleUsdt === "number" ? saleUsdt : parseFloat(saleUsdt as string);
  
//     // Type casting e.target to HTMLFormElement
//     const form = e.target as HTMLFormElement;
  
//     if (
//       isNaN(saleUsdtNumber) ||
//       saleUsdtNumber < round1Data.minR1buyusdt ||
//       saleUsdtNumber > round1Data.maxR1buyusdt
//     ) {
//       setErrorMessage(
//         `USDT amount must be between ${round1Data.minR1buyusdt} and ${round1Data.maxR1buyusdt}`
//       );
//       return;
//     } else {
//       setErrorMessage(""); // Clear the error message
  
//       if (!user) {
//         setErrorMessage("You need to log in.");
//         return;
//       }
  
//       try {
//         const timestamp = Date.now();
//         const newPurchase = {
//           saleEmail: user?.email || "", // Fallback to empty string
//           senderadress: form.sendAdr.value,  // Access the form field via form elements
//           saleUsdt: saleUsdtNumber,
//           saleMyg: saleMyg,
//           verifystatus:false,
//           timestamp: timestamp,
//         };
  
//         // Reference to store under Firebase Auth User (uid) and their Metamask address
//         const userR1Ref = ref(db, `Round1/R1buyer/users/${user.uid}/R1buylist`);
        
//         // Push new entry under the current user's R1buylist
//         await push(userR1Ref, newPurchase);

//         console.log("Purchase data saved successfully!");
//       } catch (error) {
//         console.error("Error submitting form: ", error);
//       }
//     }
//   };
  

//   return (
//     <div className="downmain">
//       <div className="downbox1">
//         <h3 style={{ fontSize: "42px", marginTop: "2rem", fontWeight: "400", marginBottom: "1rem" }}>Buy Presale</h3>
//         <form className="custom-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="saleemail">Email : </label>
//             <input type="email" id="saleemail" name="saleemail"  value={user?.email || ""}  />
//             <br /><br />
//             <label htmlFor="saleTid">Adress: </label>
//             <input type="any" id="sendAdr" name="sendAdr"required placeholder="wallet adress"/>
//             <br /><br />
//             <label htmlFor="saleusdt">USDT : </label>
//             <input
//               type="number"
//               id="saleusdt"
//               name="saleusdt"
//               value={saleUsdt}
//               onChange={handleUsdtChange}
//               required
//             />
//             <br /><br />
//             <label htmlFor="salemyg">MYG : </label>
//             <input
//               type="number"
//               id="salemyg"
//               name="salemyg"
//               value={saleMyg}
//               onChange={handleMygChange}
//               required
//             />
//             <br /><br />
//             {user && <button type="submit" className="submit-btn">Submit</button>}
//             {!user && <button className="submit-btn-unactive">Submit</button>}
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { ref, push, get, update } from "firebase/database"; // Make sure 'update' is imported
import { db } from "../../../firebase"; // Import Firebase configuration
import { useAuth } from "../../../auth"; // Assuming you're using Firebase auth hook
import "./down.css";

export function Down() {
  const { user } = useAuth(); // Get the Firebase Auth user
  const [round1Data, setRound1Data] = useState({
    R1priceusdt: 0.1,
    minR1buyusdt: 10,
    maxR1buyusdt: 50,
  });

  const [saleUsdt, setSaleUsdt] = useState<number | "">(0);
  const [saleMyg, setSaleMyg] = useState<number | "">(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Fetch the Round1 data when the component mounts
  useEffect(() => {
    const fetchRound1Data = async () => {
      try {
        const round1Ref = ref(db, "Round1");
        const snapshot = await get(round1Ref);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setRound1Data({
            R1priceusdt: data.R1priceusdt,
            minR1buyusdt: data.minR1buyusdt,
            maxR1buyusdt: data.maxR1buyusdt,
          });
        } else {
          console.error("No Round1 data found");
        }
      } catch (error) {
        console.error("Error fetching Round1 data: ", error);
      }
    };
    fetchRound1Data();
  }, []);

  // Handle saleusdt change and calculate salemyg
  const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setSaleUsdt(value);
    if (!isNaN(value)) {
      setSaleMyg(value / round1Data.R1priceusdt);
    } else {
      setSaleMyg("");
    }
  };

  // Handle salemyg change and calculate saleusdt
  const handleMygChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setSaleMyg(value);
    if (!isNaN(value)) {
      setSaleUsdt(value * round1Data.R1priceusdt);
    } else {
      setSaleUsdt("");
    }
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const saleUsdtNumber = typeof saleUsdt === "number" ? saleUsdt : parseFloat(saleUsdt as string);

    // Type casting e.target to HTMLFormElement
    const form = e.target as HTMLFormElement;

    if (
      isNaN(saleUsdtNumber) ||
      saleUsdtNumber < round1Data.minR1buyusdt ||
      saleUsdtNumber > round1Data.maxR1buyusdt
    ) {
      setErrorMessage(
        `USDT amount must be between ${round1Data.minR1buyusdt} and ${round1Data.maxR1buyusdt}`
      );
      return;
    } else {
      setErrorMessage(""); // Clear the error message

      if (!user) {
        setErrorMessage("You need to log in.");
        return;
      }

      try {
        const timestamp = Date.now();
        const newPurchase = {
          saleEmail: user?.email || "", // Fallback to empty string
          senderadress: form.sendAdr.value,  // Access the form field via form elements
          saleUsdt: saleUsdtNumber,
          saleMyg: saleMyg,
          verifystatus: false,
          timestamp: timestamp,
        };

        // Reference to store under Firebase Auth User (uid) and their Metamask address
        const userR1Ref = ref(db, `Round1/R1buyer/users/${user.uid}/R1buylist`);
        
        // Push new entry under the current user's R1buylist
        await push(userR1Ref, newPurchase);

        // After successfully submitting the purchase, update the total R1Tokenbuy
        const round1Ref = ref(db, "Round1");

        // Fetch current R1Tokenbuy value
        const snapshot = await get(round1Ref);
        if (snapshot.exists()) {
          const currentData = snapshot.val();
          const currentR1Tokenbuy = currentData.R1Tokenbuy || 0;

          // Increment R1Tokenbuy by saleMyg value
          const updatedR1Tokenbuy = currentR1Tokenbuy + saleMyg;

          // Update the R1Tokenbuy in Firebase
          await update(round1Ref, { R1Tokenbuy: updatedR1Tokenbuy });

          console.log("R1Tokenbuy updated successfully!");
        } else {
          console.error("Round1 data not found");
        }

        console.log("Purchase data saved successfully!");

        // Reset form values after successful submission
        setSaleUsdt(0);
        setSaleMyg(0);
      } catch (error) {
        console.error("Error submitting form: ", error);
      }
    }
  };

  return (
    <div className="downmain">
      <div className="downbox1">
        <h3 style={{ fontSize: "42px", marginTop: "2rem", fontWeight: "400", marginBottom: "1rem" }}>Buy Presale</h3>
        <form className="custom-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="saleemail">Email : </label>
            <input type="email" id="saleemail" name="saleemail" value={user?.email || ""} />
            <br /><br />
            <label htmlFor="saleTid">Adress: </label>
            <input type="any" id="sendAdr" name="sendAdr" required placeholder="wallet adress" />
            <br /><br />
            <label htmlFor="saleusdt">USDT : </label>
            <input
              type="number"
              id="saleusdt"
              name="saleusdt"
              value={saleUsdt}
              onChange={handleUsdtChange}
              required
            />
            <br /><br />
            <label htmlFor="salemyg">MYG : </label>
            <input
              type="number"
              id="salemyg"
              name="salemyg"
              value={saleMyg}
              onChange={handleMygChange}
              required
            />
            <br /><br />
            {user && <button type="submit" className="submit-btn">Submit</button>}
            {!user && <button className="submit-btn-unactive">Submit</button>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}


//transition 1
// import React, { useState, useEffect } from "react";
// import { ref, push, get, update } from "firebase/database"; // Use push for new entries
// import { db } from "../../../firebase"; // Import Firebase
// import { ConnectButton,TransactionButton,useActiveAccount } from "thirdweb/react"; // Import for Metamask connection
// import { useAuth } from "../../../auth"; // Assuming you're using Firebase auth hook
// import "./down.css"

// export function Down() {
//   const account = useActiveAccount(); // Get the Metamask account
//   const { user } = useAuth(); // Get the Firebase Auth user
//   const [round1Data, setRound1Data] = useState({
//     R1priceusdt: 0,
//     minR1buyusdt: 0,
//     maxR1buyusdt: 0,
//   });
  
//   const [saleUsdt, setSaleUsdt] = useState<number | "">(0);
//   const [saleMyg, setSaleMyg] = useState<number | "">(0);
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   // Fetch the Round1 data when the component mounts
//   useEffect(() => {
//     const fetchRound1Data = async () => {
//       try {
//         const round1Ref = ref(db, "Round1");
//         const snapshot = await get(round1Ref);
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           setRound1Data({
//             R1priceusdt: data.R1priceusdt,
//             minR1buyusdt: data.minR1buyusdt,
//             maxR1buyusdt: data.maxR1buyusdt,
//           });
//         } else {
//           console.error("No Round1 data found");
//         }
//       } catch (error) {
//         console.error("Error fetching Round1 data: ", error);
//       }
//     };
//     fetchRound1Data();
//   }, []);

//   // Handle saleusdt change and calculate salemyg
//   const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value);
//     setSaleUsdt(value);
//     if (!isNaN(value)) {
//       setSaleMyg(value / round1Data.R1priceusdt);
//     } else {
//       setSaleMyg("");
//     }
//   };

//   // Handle salemyg change and calculate saleusdt
//   const handleMygChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value);
//     setSaleMyg(value);
//     if (!isNaN(value)) {
//       setSaleUsdt(value * round1Data.R1priceusdt);
//     } else {
//       setSaleUsdt("");
//     }
//   };

//   // Form submission handler
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const saleUsdtNumber = typeof saleUsdt === "number" ? saleUsdt : parseFloat(saleUsdt as string);
  
//     // Type casting e.target to HTMLFormElement
//     const form = e.target as HTMLFormElement;
  
//     if (
//       isNaN(saleUsdtNumber) ||
//       saleUsdtNumber < round1Data.minR1buyusdt ||
//       saleUsdtNumber > round1Data.maxR1buyusdt
//     ) {
//       setErrorMessage(
//         `USDT amount must be between ${round1Data.minR1buyusdt} and ${round1Data.maxR1buyusdt}`
//       );
//       return;
//     } else {
//       setErrorMessage(""); // Clear the error message
  
//       if (!account || !user) {
//         setErrorMessage("You need to log in with Metamask and Firebase.");
//         return;
//       }
  
//       try {
//         const timestamp = Date.now();
//         const newPurchase = {
//           saleEmail: user?.email || "", // Fallback to empty string
//           saleTid: form.saleTid.value,  // Access the form field via form elements
//           saleUsdt: saleUsdtNumber,
//           saleMyg: saleMyg,
//           timestamp: timestamp,
//           senderadress:account.address,
//         };
  
//         // Reference to store under Firebase Auth User (uid) and their Metamask address
//         const userR1Ref = ref(db, `Round1/R1buyer/users/${user.uid}/R1buylist`);
        
//         // Push new entry under the current user's R1buylist
//         await push(userR1Ref, newPurchase);
  
//         // Optionally: Save the Metamask address under the user if it's not saved already
//         //const userInfoRef = ref(db, `Round1/R1buyer/${account.address}`);
//         //await update(userInfoRef, newPurchase); // update the account with the same data for tracking
  
//         console.log("Purchase data saved successfully!");
//       } catch (error) {
//         console.error("Error submitting form: ", error);
//       }
//     }
//   };
  

//   return (
//     <div className="downmain">
//       <div className="downbox1">
//         <h3 style={{ fontSize: "42px", marginTop: "2rem", fontWeight: "400", marginBottom: "1rem" }}>Buy Presale</h3>
//         <form className="custom-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="saleemail">Email : </label>
//             <input type="email" id="saleemail" name="saleemail"  value={user?.email || ""}  />
//             <br /><br />
//             <label htmlFor="saleTid">Telegram ID: </label>
//             <input type="number" id="saleTid" name="saleTid"required />
//             <br /><br />
//             <label htmlFor="saleusdt">USDT : </label>
//             <input
//               type="number"
//               id="saleusdt"
//               name="saleusdt"
//               value={saleUsdt}
//               onChange={handleUsdtChange}
//               required
//             />
//             <br /><br />
//             <label htmlFor="salemyg">MYG : </label>
//             <input
//               type="number"
//               id="salemyg"
//               name="salemyg"
//               value={saleMyg}
//               onChange={handleMygChange}
//               required
//             />
//             <br /><br />
//             {account &&
            
//             <button type="submit" className="submit-btn">Submit</button>}
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


//transition2 
// import React, { useState, useEffect } from "react";
// import { ref, push, get } from "firebase/database"; // Use push for new entries
// import { db } from "../../../firebase"; // Import Firebase
// import { ConnectButton, TransactionButton, useActiveAccount } from "thirdweb/react"; // Import for Metamask connection
// import { useAuth } from "../../../auth"; // Assuming you're using Firebase auth hook
// import "./down.css";
// import { toWei } from "thirdweb";
// import { prepareTransaction } from "thirdweb";
// import { client } from "../../../app/client";
// import { chain } from "../../../app/chain";

// export function Down() {
//   const account = useActiveAccount(); // Get the Metamask account
//   const { user } = useAuth(); // Get the Firebase Auth user
//   const [round1Data, setRound1Data] = useState({
//     R1priceusdt: 0,
//     minR1buyusdt: 0,
//     maxR1buyusdt: 0,
//   });

//   const [saleUsdt, setSaleUsdt] = useState<number | "">(0);
//   const [saleMyg, setSaleMyg] = useState<number | "">(0);
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   // Fetch the Round1 data when the component mounts
//   useEffect(() => {
//     const fetchRound1Data = async () => {
//       try {
//         const round1Ref = ref(db, "Round1");
//         const snapshot = await get(round1Ref);
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           setRound1Data({
//             R1priceusdt: data.R1priceusdt,
//             minR1buyusdt: data.minR1buyusdt,
//             maxR1buyusdt: data.maxR1buyusdt,
//           });
//         } else {
//           console.error("No Round1 data found");
//         }
//       } catch (error) {
//         console.error("Error fetching Round1 data: ", error);
//       }
//     };
//     fetchRound1Data();
//   }, []);

//   // Handle saleusdt change and calculate salemyg
//   const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value);
//     setSaleUsdt(value);
//     if (!isNaN(value)) {
//       setSaleMyg(value / round1Data.R1priceusdt);
//     } else {
//       setSaleMyg("");
//     }
//   };

//   // Handle salemyg change and calculate saleusdt
//   const handleMygChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value);
//     setSaleMyg(value);
//     if (!isNaN(value)) {
//       setSaleUsdt(value * round1Data.R1priceusdt);
//     } else {
//       setSaleUsdt("");
//     }
//   };

//   const handleTransactionSuccess = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const saleUsdtNumber = typeof saleUsdt === "number" ? saleUsdt : parseFloat(saleUsdt as string);
      
//         // Type casting e.target to HTMLFormElement
//         const form = e.target as HTMLFormElement;
      
//         if (
//           isNaN(saleUsdtNumber) ||
//           saleUsdtNumber < round1Data.minR1buyusdt ||
//           saleUsdtNumber > round1Data.maxR1buyusdt
//         ) {
//           setErrorMessage(
//             `USDT amount must be between ${round1Data.minR1buyusdt} and ${round1Data.maxR1buyusdt}`
//           );
//           return;
//         } else {
//           setErrorMessage(""); // Clear the error message
      
//           if (!account || !user) {
//             setErrorMessage("You need to log in with Metamask and Firebase.");
//             return;
//           }
      
//           try {
//             const timestamp = Date.now();
//             const newPurchase = {
//               saleEmail: user?.email || "", // Fallback to empty string
//               saleTid: form.saleTid.value,  // Access the form field via form elements
//               saleUsdt: saleUsdtNumber,
//               saleMyg: saleMyg,
//               timestamp: timestamp,
//               senderadress:account.address,
//             };
      
//             // Reference to store under Firebase Auth User (uid) and their Metamask address
//             const userR1Ref = ref(db, `Round1/R1buyer/users/${user.uid}/R1buylist`);
            
//             // Push new entry under the current user's R1buylist
//             await push(userR1Ref, newPurchase);
      
//             // Optionally: Save the Metamask address under the user if it's not saved already
//             //const userInfoRef = ref(db, `Round1/R1buyer/${account.address}`);
//             //await update(userInfoRef, newPurchase); // update the account with the same data for tracking
      
//             console.log("Purchase data saved successfully!");
//           } catch (error) {
//             console.error("Error submitting form: ", error);
//           }
//         }
//       };

//   // Transaction button handler
//   // const handleTransaction = async () => {
//   //   try {
//   //     // Call your smart contract or thirdweb SDK here for the actual transaction
//   //     // Example: await someContract.someMethod();
//   //     console.log("Transaction processing...");
//   //   } catch (error) {
//   //     console.error("Transaction failed: ", error);
//   //   }
//   // };

//   return (
//     <div className="downmain">
//       <div className="downbox1">
//         <h3 style={{ fontSize: "42px", marginTop: "2rem", fontWeight: "400", marginBottom: "1rem" }}>Buy Presale</h3>
//         <form className="custom-form" onSubmit={(e) => e.preventDefault()}>
//           <div className="form-group">
//             <label htmlFor="saleemail">Email: </label>
//             <input type="email" id="saleemail" name="saleemail" value={user?.email || ""} readOnly />
//             <br /><br />
//             <label htmlFor="saleTid">Telegram ID: </label>
//             <input type="number" id="saleTid" name="saleTid" required />
//             <br /><br />
//             <label htmlFor="saleusdt">USDT: </label>
//             <input
//               type="number"
//               id="saleusdt"
//               name="saleusdt"
//               value={saleUsdt}
//               onChange={handleUsdtChange}
//               required
//             />
//             <br /><br />
//             <label htmlFor="salemyg">MYG: </label>
//             <input
//               type="number"
//               id="salemyg"
//               name="salemyg"
//               value={saleMyg}
//               onChange={handleMygChange}
//               required
//             />
//             <br /><br />
//             {account && (
//               <TransactionButton
//               transaction={() => {
//                 // Create a transaction object and return it
//                 const transaction = prepareTransaction({
//                     to: "WALLET_ADDRESSS_TO_SEND_NATIVE_TOKEN",
//                     chain: chain,
//                     client: client,
//                     value: toWei("1.0"),
//                 });
//                 return transaction;
//             }}
//                 // onTransactionConfirmed={handleTransactionSuccess}
//               >
//                 <button type="submit" className="submit-btn">
//                   Submit
//                 </button>
//               </TransactionButton>
//             )}
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
