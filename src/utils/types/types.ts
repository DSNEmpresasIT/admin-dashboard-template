export enum ProjectsTypes {
   RESIDENCIAL = 'residencial',
}

export interface Projects {
  _id: string;
  clientName: string;
  imageUrl: ImageUrl[];
  title: string;
  description: string;
  type: ProjectsTypes;
  projectClient: string;
  project_date: string;
}

export interface ImageUrl {
  url: string;
  id: string;
}
