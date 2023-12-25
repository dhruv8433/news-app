import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { AddUser } from "./addUser";
import { UserLoginSuccess } from "../action/action";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const googleSignIn = async ({ dispatch, setOpen }) => {
  const provider = new GoogleAuthProvider();
  const response = await signInWithPopup(auth, provider);
  // this will print all user information in console for further processing
  console.log("google response", response);
  try {
    const userObject = {
      name: response.user.displayName,
      email: response.user.email,
      url: response.user.photoURL,
    };
    dispatch(UserLoginSuccess(userObject));
    const userResponse = await AddUser(userObject);
    Cookies.set("authenticated", true);
    console.log("login success");
    console.log(userResponse);
    toast.success("user logged in successfully");
    setOpen(false);
  } catch (error) {
    console.log("google error", error);
  }
};

const logOut = () => {
  signOut(auth);
};

export async function handleSignIn({ dispatch, setOpen }) {
  try {
    await googleSignIn({ dispatch, setOpen });
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
