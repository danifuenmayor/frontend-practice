import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";
import {
  GetUsersSuccessAction,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GetUsersFailAction,
  GetUsersAction,
  EDIT_USER,
  EditUserAction,
  EDIT_USER_SUCCESS,
  EditUserSuccessAction,
  EditUserFailAction,
  EDIT_USER_FAIL,
  GET_ONE_USER,
  GetOneUserAction,
  GetOneUserSuccessAction,
  GET_ONE_USER_SUCCESS,
  GetOneUserFailAction,
  GET_ONE_USER_FAIL,
} from "../reducers/admin/types";
const urlServer = "http://localhost:3000/";

function* getUsers() {
  yield takeLatest(GET_USERS, function* (action: GetUsersAction) {
    try {
      const response = yield call(axios.get, `http://localhost:3000/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      yield put<GetUsersSuccessAction>({
        type: GET_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<GetUsersFailAction>({
        type: GET_USERS_FAIL,
        payload: err.message,
      });
    }
  });
}

function* getOneUser() {
  yield takeLatest(GET_ONE_USER, function* (action: GetOneUserAction) {
    try {
      const { payload } = action;

      const response = yield call(axios.get, `${urlServer}users/${payload}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      yield put<GetOneUserSuccessAction>({
        type: GET_ONE_USER_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<GetOneUserFailAction>({
        type: GET_ONE_USER_FAIL,
        payload: err.message,
      });
    }
  });
}

function* editUser() {
  yield takeLatest(EDIT_USER, function* (action: EditUserAction) {
    try {
      const { payload } = action;

      const response = yield call(
        axios.put,
        `${urlServer}users/${payload.userId}`,
        {
          name: payload.name,
          lastName: payload.lastName,
          email: payload.email,
          password: payload.password,
          isActive: payload.isActive,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      yield put<EditUserSuccessAction>({
        type: EDIT_USER_SUCCESS,
        payload: {
          ...response.data,
          status: response.status,
        },
      });
    } catch (err) {
      yield put<EditUserFailAction>({
        type: EDIT_USER_FAIL,
        payload: err.message,
      });
    }
  });
}

export default function* saga() {
  yield fork(getUsers);
  yield fork(getOneUser);
  yield fork(editUser);
}
