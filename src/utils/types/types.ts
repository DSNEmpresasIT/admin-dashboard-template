export enum Roles {
  ADMIN = 'dsn_access_admin',
}

export interface Projects {
  _id: string;
  clientName: string;
  imageUrl: ImageUrl[];
  title: string;
  description: string;
  type: string | undefined;
  projectClient: string;
  project_date: string;
}

export interface ImageUrl {
  url: string;
  id: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

// Auth Context section

export enum AuthContextTypes {
  LOGIN = 'USER_LOGGED',
  LOGOUT = 'USER_LOGOUT'
}

export interface UserPayload {
  id: string;
  email: string;
  token?: string;
  userName: string;
  role: Roles;
  companyId: number;
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

export interface ProjectTypesCMS {
  label: string;
  value: string;
}


export interface ProjectFormData {
  title: string;
  description: string;
  project_date: string;
  projectClient: string;
  type: string | undefined;
  imageUrl: string[] | null[] | ImageUrl[];
}

export interface UserTableInterface {
  logo: string;
  userName: string;
  role: Roles;
  status: boolean;
  company: {
    id: number;
    companyName: string;
  }
}

export interface RoleData {
  id: number;
  name: string;
  key: string;
}
