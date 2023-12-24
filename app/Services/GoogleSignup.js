import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  const response = await signInWithPopup(auth, provider);
  // this will print all user information in console for further processing 
  console.log("google response", response);
};

const logOut = () => {
  signOut(auth);
};

export async function handleSignIn() {
  try {
    await googleSignIn();
  } catch (error) {
    console.log(error);
  }
}

export async function handleSignOut() {
  try {
    await logOut();
  } catch (error) {
    console.log(error);
  }
}
