import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function AddUser(userData) {
  try {
    console.log("userData", userData);

    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("doc id", docRef.id);

  } catch (error) {
    console.log(error);
  }
}
