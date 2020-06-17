// Users payload
export interface PayloadGetUsers {
  users: object;
}
// Admin state
export interface AdminState {
  name: string;
  lastName: string;
  email: string;
  error?: string;
  users: object;
}

// Get users action names
export const GET_USERS = "ADMIN/GET_USERS";
export const GET_USERS_SUCCESS = "ADMIN/GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "ADMIN/GET_USERS_FAIL";

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
  payload: PayloadGetUsers;
}

export type AdminActions =
  | GetUsersAction
  | GetUsersFailAction
  | GetUsersSuccessAction;
