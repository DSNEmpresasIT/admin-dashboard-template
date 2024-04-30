import { ImageUrl } from "../types";

export interface CreateProjectDto {
  title: string;
  type: string | undefined;
  description: string;
  projectClient?: string;
  project_date?: string;
  imageUrl: string[] | ImageUrl[];
}

export interface UpdateProjectDto extends CreateProjectDto {}

export interface CompanyDto {
  id: number,
  company_name: string,
  logo: string,
  users: object[],
  projects: object[],
  microsite?: object[]
}
