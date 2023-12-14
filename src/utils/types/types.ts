
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

export interface FormData {
  email: string;
  password: string;
}

// Auth Context section

export enum AuthContextTypes {
  LOGIN = 'USER_LOGGED',
  LOGOUT = 'USER_LOGOUT'
}

export interface UserPayload {
  clientName: string;
  email: string;
  token?: string;
  userName: string;
}
 
export interface AuthContextState {
  isAuth: boolean;
  token: string;
  user: UserPayload;
}

export interface AuthContextAction {
  type: AuthContextTypes;
  payload: UserPayload; 
}
