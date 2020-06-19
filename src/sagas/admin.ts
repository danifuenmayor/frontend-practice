import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";
import {
  GetUsersSuccessAction,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GetUsersFailAction,
  GetUsersAction,
} from "../reducers/admin/types";
const urlServer = "http://localhost:3000/";
function* getUsers() {
  yield takeLatest(GET_USERS, function* (action: GetUsersAction) {
    try {
      const response = yield call(axios.get, `${urlServer}users`, {
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
export default function* saga() {
  yield fork(getUsers);
}
