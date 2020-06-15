import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";
import {
  SendLoginAction,
  SendLoginSuccessAction,
  SEND_LOGIN_SUCCESS,
  SendLoginFailAction,
  SEND_LOGIN_FAIL,
  SEND_LOGIN,
} from "../reducers/user/types";

function* login() {
  yield takeLatest(SEND_LOGIN, function* (action: SendLoginAction) {
    try {
      const { payload } = action;

      const response = yield call(axios.post, "http://localhost:3000/login", {
        email: payload.email,
        password: payload.password,
      });

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

export default function* saga() {
  yield fork(login);
}
