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
} from "../reducers/user/types";

function* login() {
  yield takeLatest(SEND_LOGIN, function* (action: SendLoginAction) {
    try {
      const { payload } = action;
      console.log("payload", payload);

      const response = yield call(axios.post, "http://localhost:3000/login", {
        email: payload.email,
        password: payload.password,
      });
      console.log("response", response);

      yield put<SendLoginSuccessAction>({
        type: SEND_LOGIN_SUCCESS,
        payload: response.data,
      });
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

      const response = yield call(axios.post, "http://localhost:3000/users", {
        name: payload.name,
        lastname: payload.lastname,
        email: payload.email,
        rut: payload.rut,
        password: payload.password,
      });
      console.log("response", response);

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

export default function* saga() {
  yield fork(login);
  yield fork(register);
}
