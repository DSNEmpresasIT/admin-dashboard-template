import { CreateProjectDto } from '@/utils/types/dto/dto';
import axios from 'axios';

const BASE_URL = process.env.ENVIROMENT === 'development' ? process.env.API_BASE_URL_DEVELOPMENT : process.env.API_BASE_URL_PRODUCTION;

export async function getAllProjects(clientName: string) {
  try {
    const response = await axios.get(`${BASE_URL}/projects/client/${clientName}`);
    return response.data;
  } catch (error) {
    throw new Error()
  }
}

export async function createProject(clientName: string, token: string,formData: CreateProjectDto) {
  try {
    const response = await axios({
      method: 'POST',
      baseURL: `${BASE_URL}/projects/create/${clientName}`,
      data: formData,
      headers: {
        'Authorization': `Bearer ${token}`       
      }
    })

    return response.data;
  } catch (error) {
    if (error.response.status === 401) throw new Error('Usted no está autorizado a realizar esta operación, por favor, ingrese con su cuenta nuevamente.');

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
    throw new Error(`Ha ocurrido un error: ${error.message}`) 
  }
}
