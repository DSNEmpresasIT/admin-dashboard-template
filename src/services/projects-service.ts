import { CreateProjectDto } from '@/utils/types/dto/dto';
import axios from 'axios';

const BASE_URL = process.env.API_BASE_URL;
const CLIENT = process.env.CLIENT

export async function getAllProjects() {
  try {
    const response = await axios.get(`${BASE_URL}/projects/client/${CLIENT}`);
    return response.data;
  } catch (error) {
    console.log(error.message)
  }
}

export async function createProject(formData: CreateProjectDto) {
  try {
    const response = await axios({
      method: 'POST',
      baseURL: `${BASE_URL}/projects/create/${CLIENT}`,
      data: formData,
    })

    return response.data;
  } catch (error) {
    console.log(error.message)
  }
}
