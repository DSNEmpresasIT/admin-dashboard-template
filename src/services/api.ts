import axios from "axios";


export const API = axios.create({
  baseURL:  process.env.ENVIROMENT === 'development' ? process.env.API_BASE_URL_DEVELOPMENT : process.env.API_BASE_URL_PRODUCTION,
  timeout: 3000  
})