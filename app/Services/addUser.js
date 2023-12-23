import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import toast from "react-hot-toast";

export async function AddUser(userData) {
  try {
    console.log("userData", userData);

    const docRef = await addDoc(collection(db, "users"), {
      email: userData.email,
      password: userData.password,
      phone: userData.phone,
      name: userData.username,
    });
    console.log("doc id", docRef.id);

    toast.success("user created success!");
  } catch (error) {
    console.log(error);
  }
}
