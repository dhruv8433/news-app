import axios from "axios";
import { api_endpoint } from "./config/config";

// send api request to particular endpoint
export const httpAxios = axios.create({
  baseURL: `${api_endpoint}`,
});
