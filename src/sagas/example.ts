import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";

import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  SendMessageAction,
  SendMessageSuccessAction,
  SendMessageFailAction,
} from "../reducers/example/types";

function* getList() {
  yield takeLatest(SEND_MESSAGE, function* (action: SendMessageAction) {
    try {
      const { payload } = action;
      console.log("payload", payload);

      const response = yield call(axios, "http://wttr.in/");
      console.log("response", response);

      yield put<SendMessageSuccessAction>({
        type: SEND_MESSAGE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put<SendMessageFailAction>({
        type: SEND_MESSAGE_FAIL,
        payload: {
          error: e,
        },
      });
    }
  });
}

export default function* saga() {
  yield fork(getList);
}
