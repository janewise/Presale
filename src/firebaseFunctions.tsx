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


// import { db } from "./firebase"; // Import the Realtime Database instance
// import { ref, set } from "firebase/database"; // Import necessary functions from Firebase Realtime Database
// import { auth } from "./firebase"; // Import the auth instance
// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// // Initialize Round1 data (should only be run once)
// export async function initializeRound1() {
//   try {
//     await set(ref(db, 'Round1'), {
//       maxTokenR1: 10000,
//       R1start: new Date().toISOString(), // Set this to the actual UTC start time
//       R1end: new Date().toISOString(),   // Set this to the actual UTC end time
//       R1priceusdt:0.1,
//       minR1buyusdt: 15,
//       maxR1buyusdt: 50,
//       R1Tokenbuy: 0  // This value will change dynamically
//     });

//     console.log("Round1 initialized successfully!");
//   } catch (error) {
//     console.error("Error initializing Round1: ", error);
//   }
// }

// // Sign up function
// export async function signUpUser(email: string, password: string, telegramId: string) {
//   try {
//     // Create user with email and password
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Send a verification email
//     await sendEmailVerification(user);
    
//     // Save user data to the Realtime Database
//     await set(ref(db, 'users/' + user.uid), {
//       email: email,
//       telegramId: telegramId,
//       createdAt: new Date().toISOString()
//     });

//     // Return user object upon success
//     return {
//       user: user,
//       message: "Sign-up successful! Verification email sent."
//     };
//   } catch (error: any) {
//     // Handle specific Firebase error codes
//     let errorMessage = "Sign-up failed. Please try again.";
//     if (error.code === 'auth/email-already-in-use') {
//       errorMessage = "This email is already in use.";
//     } else if (error.code === 'auth/invalid-email') {
//       errorMessage = "Invalid email address.";
//     } else if (error.code === 'auth/weak-password') {
//       errorMessage = "Password should be at least 6 characters.";
//     }

//     throw new Error(errorMessage);
//   }
// }

// // Add this to avoid the isolatedModules error
// export {};

import { db } from "./firebase"; // Import the Realtime Database instance
import { ref, set, get } from "firebase/database"; // Import necessary functions from Firebase Realtime Database
import { auth } from "./firebase"; // Import the auth instance
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// Initialize Round1 data (should only be run once, e.g., on app start)
export async function initializeRound1() {
  try {
    // Check if Round1 already exists
    const round1Ref = ref(db, 'Round1');
    const snapshot = await get(round1Ref);
    
    if (!snapshot.exists()) {
      // Set initial data if it doesn't exist
      await set(round1Ref, {
        maxTokenR1: 20000,
        R1start: new Date("2024-09-28").toISOString(), // You should replace with actual start time
        R1end: new Date("2024-09-30").toISOString(),   // You should replace with actual end time
        R1priceusdt: 0.01,
        minR1buyusdt: 15,
        maxR1buyusdt: 50,
        R1Tokenbuy: 0 // This will change as tokens are bought
      });

      console.log("Round1 initialized successfully!");
    } else {
      console.log("Round1 already exists.");
    }
  } catch (error) {
    console.error("Error initializing Round1: ", error);
  }
}

export async function initializeRound2() {
  try {
    // Check if Round1 already exists
    const round2Ref = ref(db, 'Round2');
    const snapshot = await get(round2Ref);
    
    if (!snapshot.exists()) {
      // Set initial data if it doesn't exist
      await set(round2Ref, {
        maxTokenR2: 15000,
        R2start: new Date("2024-10-1").toISOString(), // You should replace with actual start time
        R2end: new Date("2024-10-2").toISOString(),   // You should replace with actual end time
        R2priceusdt: 0.02,
        minR2buyusdt: 15,
        maxR2buyusdt: 50,
        R2Tokenbuy: 0 // This will change as tokens are bought
      });

      console.log("Round2 initialized successfully!");
    } else {
      console.log("Round2 already exists.");
    }
  } catch (error) {
    console.error("Error initializing Round2: ", error);
  }
}

export async function initializeRound3() {
  try {
    // Check if Round1 already exists
    const round3Ref = ref(db, 'Round3');
    const snapshot = await get(round3Ref);
    
    if (!snapshot.exists()) {
      // Set initial data if it doesn't exist
      await set(round3Ref, {
        maxTokenR3: 10000,
        R3start: new Date("2024-10-3").toISOString(), // You should replace with actual start time
        R3end: new Date("2024-10-4").toISOString(),   // You should replace with actual end time
        R3priceusdt: 0.03,
        minR3buyusdt: 15,
        maxR3buyusdt: 50,
        R3Tokenbuy: 0 // This will change as tokens are bought
      });

      console.log("Round3 initialized successfully!");
    } else {
      console.log("Round3 already exists.");
    }
  } catch (error) {
    console.error("Error initializing Round3: ", error);
  }
}

// Sign up function
export async function signUpUser(email: string, password: string, UsernameId: string) {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send a verification email
    await sendEmailVerification(user);

    // Save user data to the Realtime Database
    await set(ref(db, 'users/' + user.uid), {
      email: email,
      UsernameId: UsernameId,
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

