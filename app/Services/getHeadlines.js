import { httpAxios, topHeadlines } from "../httpAxios";

export const getHeadlines = async () => {
  const response = await httpAxios.get(
    `/top-headlines?country=us&apiKey=b1eff6491ec94e23b32d5fd519fa0372`
  );
  return response.data;
};
