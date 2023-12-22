import axios from "axios";

const BASE_URL = process.env.ENVIROMENT === 'development' ? process.env.API_BASE_URL_DEVELOPMENT : process.env.API_BASE_URL_PRODUCTION;

export async function getProjectTypes(clientName: string, token: string) {
  try {
    const response = await axios({
      baseURL: `${BASE_URL}/cms/${clientName}/projects-types`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })   

    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
