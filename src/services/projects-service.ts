import { CreateProjectDto } from '@/utils/types/dto/dto';
import axios from 'axios';

const BASE_URL = process.env.ENVIROMENT === 'development' ? process.env.API_BASE_URL_DEVELOPMENT : process.env.API_BASE_URL_PRODUCTION;

export async function getAllProjects(clientId: string) {
  try {
    const response = await axios.get(`${BASE_URL}/projects/client/${clientId}`);
    return response.data;
  } catch (error) {
    throw new Error()
  }
}

export async function createProject(clientId: string, token: string,formData: CreateProjectDto) {
  try {
    const response = await axios({
      method: 'POST',
      baseURL: `${BASE_URL}/projects/create/${clientId}`,
      data: formData,
      headers: {
        'Authorization': `Bearer ${token}`       
      }
    })

    return response.data;
  } catch (error) {
    if (error.response.status === 401) throw new Error('Usted no está autorizado a realizar esta operación, por favor, ingrese con su cuenta nuevamente.');
    console.log(error)
    throw new Error('Ha ocurrido un error en el servidor, por favor intentelo mas tarde...')
  }
}

export async function getProjectById(projectId: string) {
  try {
    const response = await axios({
      baseURL: `${BASE_URL}/projects/${projectId}`,
      method: 'GET'
    })

    return response.data;
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error.response.data.message}`) 
  }
}

export async function updateProject(projectId: string, token: string, formData) {
  try {
    const response = await axios({
      method: 'PUT',
      baseURL: `${BASE_URL}/projects/${projectId}`,
      data: formData,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    return response;
  } catch (error) {
    console.log(error)
    throw new Error(error.response.message)
  }
}
