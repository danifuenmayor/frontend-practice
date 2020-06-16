import { all } from "redux-saga/effects";
import exampleSaga from "./example";
import userSaga from "./user";
import productsSaga from "./products";
import adminSaga from "./admin";

export default function* rootSaga() {
  yield all([exampleSaga(), userSaga(), productsSaga(), adminSaga()]);
}
