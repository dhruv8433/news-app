import { key } from "../config/config";
import { httpAxios } from "../httpAxios";

// specific news based on query string -> q
export const getSpecificQueryNews = async (q) => {
  const response = await httpAxios.get(
    `/everything?q='${q}'&from=2023-12-01&sortBy=publishedAt&apiKey=${key}`
  );
  return response.data;
};
