import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebase";
import { useAuth } from "../../auth";
import "./tx.css"

interface Transaction {
  saleUsdt: number;
  saleMyg: number;
  senderadress: string;
  timestamp: number;
  verifystatus: boolean;
}

export function Tx() {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      if (!user) return; // Ensure user is authenticated

      try {
        const transactionRef = ref(db, `Round1/R1buyer/users/${user.uid}/R1buylist`);
        const snapshot = await get(transactionRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const transactionArray = Object.values(data) as Transaction[]; // Convert the object to an array
          setTransactions(transactionArray);
        } else {
          setError("No transaction history found.");
        }
      } catch (error) {
        setError("Error fetching transaction history.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactionHistory();
  }, [user]);
//r2
  // useEffect(() => {
  //   const fetchTransactionHistory = async () => {
  //     if (!user) return; // Ensure user is authenticated

  //     try {
  //       const transactionRef = ref(db, `Round2/R2buyer/users/${user.uid}`);
  //       const snapshot = await get(transactionRef);

  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         const transactionArray = Object.values(data) as Transaction[]; // Convert the object to an array
  //         setTransactions(transactionArray);
  //       } else {
  //         setError("No transaction history found.");
  //       }
  //     } catch (error) {
  //       setError("Error fetching transaction history.");
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTransactionHistory();
  // }, [user]);
  // //r3
  // useEffect(() => {
  //   const fetchTransactionHistory = async () => {
  //     if (!user) return; // Ensure user is authenticated

  //     try {
  //       const transactionRef = ref(db, `Round3/R3buyer/users/${user.uid}/R3buylist`);
  //       const snapshot = await get(transactionRef);

  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         const transactionArray = Object.values(data) as Transaction[]; // Convert the object to an array
  //         setTransactions(transactionArray);
  //       } else {
  //         setError("No transaction history found.");
  //       }
  //     } catch (error) {
  //       setError("Error fetching transaction history.");
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTransactionHistory();
  // }, [user]);
   // Debugging: Check if senderAddress exists in the transaction

  
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : transactions.length > 0 ? (
        <table>
          {/* <thead>
            <tr>
              <th>From user Address</th>
              <th>USDT</th>
              <th>MYG</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead> */}
          <tbody>
          {transactions.map((tx, index) => (
    <tr className="row"  key={index}>
    
      <td className="col-12 col-md-7 col-lg-5">From:{tx.senderadress ? tx.senderadress : "N/A"}</td> {/* Use the correct field name */}
      <td className="col-5 col-md-5 col-lg-3">Date:{new Date(tx.timestamp).toLocaleString()}</td>
      <td className="col-2 col-lg-1">Usdt:{tx.saleUsdt}</td>
      <td className="col-2 col-lg-1">MYG:{tx.saleMyg}</td>
      <td className="col-3 col-lg-2">Status:{tx.verifystatus ? "Verified" : "Pending"}</td>
    </tr>
    
  ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
    
  );
}

