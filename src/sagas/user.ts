import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";

import {
  SendLoginAction,
  SendLoginSuccessAction,
  SEND_LOGIN_SUCCESS,
  SendLoginFailAction,
  SEND_LOGIN_FAIL,
  SEND_LOGIN,
  SEND_REGISTER,
  SendRegisterAction,
  SendRegisterSuccessAction,
  SEND_REGISTER_SUCCESS,
  SendRegisterFailAction,
  SEND_REGISTER_FAIL,
  EDIT_PROFILE,
  EditProfileAction,
  EditProfileSuccessAction,
  EDIT_PROFILE_SUCCESS,
  EditProfileFailAction,
  EDIT_PROFILE_FAIL,
  SEND_LOGOUT,
  SendLogoutSuccessAction,
  SEND_LOGOUT_SUCCESS,
} from "../reducers/user/types";


const urlServer = "http://localhost:3000/";  

function* login() {
  yield takeLatest(SEND_LOGIN, function* (action: SendLoginAction) {
    try {
      const { payload } = action;
      const response = yield call(axios.post, `${urlServer}login`, {
        email: payload.email,
        password: payload.password,
      });

      const respUser = yield call(axios.get,`${urlServer}users/me`, {
        headers: {
          Authorization: `Bearer ${response.data.accessToken}`,
        },
      });

      yield put<SendLoginSuccessAction>({
        type: SEND_LOGIN_SUCCESS,
        payload: {
          ...response.data,
          ...respUser.data,
        },
      });
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
    } catch (err) {
      yield put<SendLoginFailAction>({
        type: SEND_LOGIN_FAIL,
        payload: err.message,
      });
    }
  });
}



function* register() {
  yield takeLatest(SEND_REGISTER, function* (action: SendRegisterAction) {
    try {
      const { payload } = action;

      const response = yield call(axios.post, `${urlServer}users`, {
        name: payload.name,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      });

      yield put<SendRegisterSuccessAction>({
        type: SEND_REGISTER_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<SendRegisterFailAction>({
        type: SEND_REGISTER_FAIL,
        payload: err.message,
      });
    }
  });
}
function* editUserProfile() {
  yield takeLatest(EDIT_PROFILE, function* (action: EditProfileAction) {
    try {
      const { payload } = action;

      const response = yield call(
        axios.put,
        `${urlServer}users/me`,
        {
          name: payload.name,
          lastName: payload.lastName,
          email: payload.email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      yield put<EditProfileSuccessAction>({
        type: EDIT_PROFILE_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<EditProfileFailAction>({
        type: EDIT_PROFILE_FAIL,
        payload: err.message,
      });
    }
  });
}

export default function* saga() {
  yield fork(login);
  yield fork(register);
  yield fork(editUserProfile);
}
