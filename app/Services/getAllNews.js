import { httpAxios } from "../httpAxios";

export const getSpecificQueryNews = async (q) => {
  const response = await httpAxios.get(
    `/everything?q='${q}'&from=2023-11-23&sortBy=publishedAt&apiKey=b1eff6491ec94e23b32d5fd519fa0372`
  );
  return response.data;
};
