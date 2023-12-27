import { LoginFormData } from "@/utils/types/types";
import axios from "axios";

const BASE_URL = process.env.ENVIROMENT === 'development' ? process.env.API_BASE_URL_DEVELOPMENT : process.env.API_BASE_URL_PRODUCTION;

export async function loginByToken(token: string) {
  try {
    const response = await axios({
      baseURL: `${BASE_URL}/auth/verify-token`,
      method: 'POST',
      headers: {
        'Authorization': token
      }
    })
    
    return response.data;
  } catch (error) {
    return undefined;
  }
}

export async function login(body: LoginFormData) {
  try {
    const response = await axios({
      baseURL: `${BASE_URL}/auth/login`,
      method: 'POST',
      data: body
    })

    return response.data;
  } catch (error) {
    console.log(error)
    if(error.response.status === 400) { 
      throw new Error('No se ha encontrado un usuario con ese email y contraseña.')
    }

    throw new Error('Ha ocurrido un error en el servidor, por favor, intentelo mas tarde.')
  }
}
