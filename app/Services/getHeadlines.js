import { addDoc, collection } from "firebase/firestore";
import { key } from "../config/config";
import { db } from "../firebaseConfig";
import { httpAxios, topHeadlines } from "../httpAxios";

export const getHeadlines = async () => {
  const response = await httpAxios.get(
    `/top-headlines?country=us&apiKey=${key}`
  );

  if (response.data.articles) {
    try {
      response.data.articles.forEach(async (article) => {
        await addDoc(collection(db, "headlines"), article);
      });
      console.log("Article added to Firestore");
    } catch (error) {
      console.log("error in store db", error);
    }
  }

  return response.data;
};
