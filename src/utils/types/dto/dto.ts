import { ProjectsTypes } from "../types";

export interface CreateProjectDto {
  title: string;
  type: ProjectsTypes;
  description: string;
  projectClient?: string;
  project_date?: string;
  imageUrl: string[]
}

export interface UpdateProjectDto extends CreateProjectDto {}
