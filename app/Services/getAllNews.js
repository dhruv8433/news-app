import { key } from "../config/config";
import { httpAxios } from "../httpAxios";

// specific news based on query string -> q
export const getSpecificQueryNews = async (q) => {
  const response = await httpAxios.get(`/article/getArticles`, {
    params: {
      action: "getArticles",
      keyword: q,
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
  return response.data;
};
