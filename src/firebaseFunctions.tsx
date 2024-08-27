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
import { db } from "./firebase"; // Import the Realtime Database instance
import { ref, set } from "firebase/database"; // Import necessary functions from Firebase Realtime Database
import { auth } from "./firebase"; // Import the auth instance
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";

// Sign up function
export async function signUpUser(email: string, password: string, telegramId: string) {
  try {
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

    return user;
  } catch (error) {
    throw error;
  }
}

// Add this to avoid the isolatedModules error
export {};
