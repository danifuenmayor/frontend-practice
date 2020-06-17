import {
  PayloadGetUsers,
  GetUsersAction,
  GET_USERS,
  GetUsersSuccessAction,
  GET_USERS_SUCCESS,
  GetUsersFailAction,
  GET_USERS_FAIL,
} from "./types";

// Get Users Actions
export function getUsers(users: PayloadGetUsers): GetUsersAction {
  return {
    type: GET_USERS,
    payload: users,
  };
}
export function getUsersSuccess(users: PayloadGetUsers): GetUsersSuccessAction {
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
