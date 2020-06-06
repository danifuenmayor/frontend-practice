import { put, takeLatest, fork } from "redux-saga/effects";

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
      console.log("action", action);
      const { payload } = action;

      yield put<SendMessageSuccessAction>({
        type: SEND_MESSAGE_SUCCESS,
        payload,
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
