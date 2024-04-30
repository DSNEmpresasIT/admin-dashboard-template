import { CompanyEndpoints } from "@/utils/types/endpoints"
import { API } from "./api"

const endpoint = 'company'

export const getAllCompanies = async (token: string, skip?: number, limit?: number) => {
  try {
    const query:string = `${ skip && '&skip='+skip }${ limit && '&limit='+limit}` 

    const response = await API({
      method: 'GET',
      url: `${endpoint}/${CompanyEndpoints.GET_ALL_COMPANIES}?users=true&projects=true&microsite=true${query}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error(`(${error.response.status}) ${error.response.statusText}`)
  }
}

export const getCountCompanies = async () => {
  try {
    
    

  } catch (error) {
    throw new Error(`(${error.response.status}) ${error.response.statusText}`)
  }
}
