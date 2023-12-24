import { key } from "../config/config";
import { httpAxios, topHeadlines } from "../httpAxios";

export const getHeadlines = async () => {
  const response = await httpAxios.get(
    `/top-headlines?country=us&apiKey=${key}`
  );
  return response.data;
};
