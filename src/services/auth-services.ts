import { LoginFormData } from "@/utils/types/types";
import { API } from "./api";

export async function loginByToken(token: string) {
  try {
    const response = await API.post(`/auth/verify-token`, undefined,{
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

    const response = await API.post('/auth/login', body)

    return response.data;
  } catch (error) {
    console.log(error)
    if(error.response.status === 400) { 
      throw new Error('No se ha encontrado un usuario con ese email y contraseña.')
    }

    throw new Error(error.message)
  }
}
