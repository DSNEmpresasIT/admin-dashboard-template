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
