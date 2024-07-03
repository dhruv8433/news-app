import { addDoc, collection } from "firebase/firestore";
import { key } from "../config/config";
import { db } from "../firebaseConfig";
import { httpAxios, topHeadlines } from "../httpAxios";

// top healines of US
export const getHeadlines = async () => {
  const response = await httpAxios.get(
    `/mostpopular/v2/emailed/7.json?api-key=${key}`
  );

  // try to store in firestore -> so we can access it even we are offline
  if (response.data) {
    try {
      // response.data.forEach(async (article) => {
      //   await addDoc(collection(db, "headlines"), article);
      // });
      console.log("Article added to Firestore");
    } catch (error) {
      console.log("error in store db", error);
    }
  }

  return response.data.results;
};
