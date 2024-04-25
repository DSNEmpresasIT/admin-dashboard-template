import { API_PATH } from "@/utils/types/path"
import { API } from "./api"

export const getRoles = async () => {
  try {
    const response = await API.get(API_PATH.GET_ALL_ROLES)
    
    return response.data;
  } catch (error) {
    console.log(error.message)
 
    throw new Error(error.message)
  }
}
