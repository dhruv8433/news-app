import { key } from "../config/config";
import { httpAxios } from "../httpAxios";

// specific news based on query string -> q
export const getSpecificQueryNews = async (q) => {
  const response = await httpAxios.get(
    `/search/v2/articlesearch.json?q=${q}&api-key=${key}`
  );
  return response.data.response;
};
