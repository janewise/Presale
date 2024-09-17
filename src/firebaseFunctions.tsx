// import { auth } from "./firebase"; // Import the auth instance
// import { createUserWithEmailAndPassword } from "firebase/auth";

// // Sign up function
// export async function signUpUser(email: string, password: string) {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     return userCredential.user;
//   } catch (error) {
//     throw error;
//   }
// }

// // Add this to avoid the isolatedModules error
// export {};
// import { db } from "./firebase"; // Import the Realtime Database instance
// import { ref, set } from "firebase/database"; // Import necessary functions from Firebase Realtime Database
// import { auth } from "./firebase"; // Import the auth instance
// import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";

// // Sign up function
// export async function signUpUser(email: string, password: string, telegramId: string) {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//      // Send a verification email
//      await sendEmailVerification(user);
     
//     // Save user data to the Realtime Database
//     await set(ref(db, 'users/' + user.uid), {
//       email: email,
//       telegramId: telegramId,
//       createdAt: new Date().toISOString()
//     });

//     return user;
//   } catch (error) {
//     throw error;
//   }
// }

// // Add this to avoid the isolatedModules error
// export {};


import { db } from "./firebase"; // Import the Realtime Database instance
import { ref, set } from "firebase/database"; // Import necessary functions from Firebase Realtime Database
import { auth } from "./firebase"; // Import the auth instance
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// Initialize Round1 data (should only be run once)
export async function initializeRound1() {
  try {
    await set(ref(db, 'Round1'), {
      maxTokenR1: 10000,
      R1start: new Date().toISOString(), // Set this to the actual UTC start time
      R1end: new Date().toISOString(),   // Set this to the actual UTC end time
      R1Tokenbuy: 0  // This value will change dynamically
    });

    console.log("Round1 initialized successfully!");
  } catch (error) {
    console.error("Error initializing Round1: ", error);
  }
}

// Sign up function
export async function signUpUser(email: string, password: string, telegramId: string) {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send a verification email
    await sendEmailVerification(user);
    
    // Save user data to the Realtime Database
    await set(ref(db, 'users/' + user.uid), {
      email: email,
      telegramId: telegramId,
      createdAt: new Date().toISOString()
    });

    // Return user object upon success
    return {
      user: user,
      message: "Sign-up successful! Verification email sent."
    };
  } catch (error: any) {
    // Handle specific Firebase error codes
    let errorMessage = "Sign-up failed. Please try again.";
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = "This email is already in use.";
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = "Invalid email address.";
    } else if (error.code === 'auth/weak-password') {
      errorMessage = "Password should be at least 6 characters.";
    }

    throw new Error(errorMessage);
  }
}

// Add this to avoid the isolatedModules error
export {};
