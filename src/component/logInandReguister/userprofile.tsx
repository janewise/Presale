import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Import the Firebase auth instance
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import necessary functions from Firebase Auth
import { ref, get, child } from "firebase/database"; // Import Firebase Realtime Database functions
import { db } from "../../firebase"; // Import your Firebase Realtime Database instance
import "./userprofile.css";
import { ConnectEmbed, ConnectButton } from "../../app/thirdweb";
import { client } from "../../app/client";
import { chain } from "../../app/chain";

export default function Userprofile() {
  const [email, setEmail] = useState<string | null>(null);
  const [UsernameId, setUsernameId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setEmail(user.email);

        try {
          // Reference to the user's data in Firebase Realtime Database
          const userRef = ref(db, 'users/' + user.uid);
          const snapshot = await get(userRef);

          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUsernameId(userData.UsernameId);
          } else {
            console.error("No data available for this user.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        // Redirect to sign-in if the user is not logged in
        navigate("/signin");
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="mainProfile">
      <div className="profile-box1">
        <h2>User Profile</h2>
        <div className="profile-details">
          <p><strong>Username:</strong> {UsernameId}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>

        <ConnectButton
        client={client}
        chain={chain}
        // connectModal={{ size: "wide" }}
      />
        <button className="btn btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
