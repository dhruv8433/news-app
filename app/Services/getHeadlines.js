import { addDoc, collection } from "firebase/firestore";
import { key } from "../config/config";
import { db } from "../firebaseConfig";
import { httpAxios, topHeadlines } from "../httpAxios";

// top healines of US
export const getHeadlines = async () => {
  const response = await httpAxios.get(`/article/getArticles`, {
    params: {
      action: "getArticles",
      keyword: "Top Headlines",
      articlesPage: 1,
      articlesCount: 100,
      articlesSortBy: "date",
      articlesSortByAsc: false,
      articlesArticleBodyLen: -1,
      resultType: "articles",
      dataType: ["news", "pr"],
      apiKey: key,
      forceMaxDataTimeWindow: 31,
    },
  });

  // try to store in firestore -> so we can access it even we are offline
  if (response.data.articles.results) {
    try {
      response.data.articles.results.forEach(async (article) => {
        await addDoc(collection(db, "headlines"), article);
      });
      console.log("Article added to Firestore");
    } catch (error) {
      console.log("error in store db", error);
    }
  }

  return response.data;
};
