import {
  PayloadGetUsers,
  GetUsersAction,
  GET_USERS,
  GetUsersSuccessAction,
  GET_USERS_SUCCESS,
  GetUsersFailAction,
  GET_USERS_FAIL,
  PayloadEditUser,
  EditUserAction,
  EDIT_USER,
  EditUserFailAction,
  EDIT_USER_FAIL,
  EditUserSuccessAction,
  EDIT_USER_SUCCESS,
  PayloadGetOneUser,
  GetOneUserAction,
  GetOneUserFailAction,
  GetOneUserSuccessAction,
  GET_ONE_USER,
  GET_ONE_USER_FAIL,
  GET_ONE_USER_SUCCESS
} from "./types";

// Get Users Actions
export function getUsers(users: PayloadGetUsers): GetUsersAction {
  return {
    type: GET_USERS,
    payload: users,
  };
}
export function getUsersSuccess(users: PayloadGetOneUser[]): GetUsersSuccessAction {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
}
export function getUsersFail(error: string): GetUsersFailAction {
  return {
    type: GET_USERS_FAIL,
    payload: error,
  };
}

//Get one user Actions
export function getOneUser(user: PayloadGetOneUser): GetOneUserAction {
  return {
    type: GET_ONE_USER,
    payload: user,
  };
}
export function getOneUserSuccess(user: PayloadGetOneUser): GetOneUserSuccessAction {
  return {
    type: GET_ONE_USER_SUCCESS,
    payload: user,
  };
}
export function getOneUserFail(error: string): GetOneUserFailAction {
  return {
    type: GET_ONE_USER_FAIL,
    payload: error,
  };
}

// Edit Users Actions
export function editUser(user: PayloadEditUser): EditUserAction {
  return {
    type: EDIT_USER,
    payload: user,
  };
}
export function editUserSuccess(user: PayloadEditUser): EditUserSuccessAction {
  return {
    type: EDIT_USER_SUCCESS,
    payload: user,
  };
}
export function editUserFail(error: string): EditUserFailAction {
  return {
    type: EDIT_USER_FAIL,
    payload: error,
  };
}
