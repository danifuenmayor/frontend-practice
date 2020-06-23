// Users payload
export interface PayloadGetUsers {
  error?: string;
  users: any[];
}

export interface PayloadGetOneUser {
  name: string;
  lastName: string;
  email: string;
  id: string;
  isActive: any;
}

export interface PayloadEditUser{
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  userId?: string;
  id?: string;
  isActive?: null; 
}
// Admin state
export interface AdminState {
  name: string;
  lastName: string;
  email: string;
  error?: string;
  users: PayloadGetOneUser[];
  selected?: {
    user?: PayloadGetOneUser;
    loading?: boolean;
    error?: string;
  };
}

// Get users action names
export const GET_USERS = "ADMIN/GET_USERS";
export const GET_USERS_SUCCESS = "ADMIN/GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "ADMIN/GET_USERS_FAIL";

export const GET_ONE_USER = "ADMIN/GET_ONE_USER";
export const GET_ONE_USER_SUCCESS = "ADMIN/GET_ONE_USER_SUCCESS";
export const GET_ONE_USER_FAIL = "ADMIN/GET_ONE_USER_FAIL";

export const EDIT_USER = "ADMIN/EDIT_USER";
export const EDIT_USER_SUCCESS = "ADMIN/EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "ADMIN/EDIT_USER_FAIL";



// GetUser action types
export interface GetUsersAction {
  type: typeof GET_USERS;
  payload: PayloadGetUsers;
}
export interface GetUsersFailAction {
  type: typeof GET_USERS_FAIL;
  payload: string;
}
export interface GetUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: PayloadGetOneUser[];
}


// Get one user action types
export interface GetOneUserAction {
  type: typeof GET_ONE_USER;
  payload: PayloadGetOneUser;
}
export interface GetOneUserFailAction {
  type: typeof GET_ONE_USER_FAIL;
  payload: string;
}
export interface GetOneUserSuccessAction {
  type: typeof GET_ONE_USER_SUCCESS;
  payload: PayloadGetOneUser;
}

//Edit User action types

export interface EditUserAction {
  type: typeof EDIT_USER;
  payload: PayloadEditUser;
}
export interface EditUserFailAction {
  type: typeof EDIT_USER_FAIL;
  payload: string;
}
export interface EditUserSuccessAction {
  type: typeof EDIT_USER_SUCCESS;
  payload: PayloadEditUser;
}

export type AdminActions =
  | GetUsersAction
  | GetUsersFailAction
  | GetUsersSuccessAction
  | GetOneUserAction
  | GetOneUserSuccessAction
  | GetOneUserFailAction
  | EditUserAction
  | EditUserFailAction
  | EditUserSuccessAction;
