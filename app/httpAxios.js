import axios from "axios";
import { api_endpoint } from "./config/config";

export const httpAxios = axios.create({
    baseURL: `${api_endpoint}` 
})