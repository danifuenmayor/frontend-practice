import { all } from "redux-saga/effects";
import exampleSaga from "./example";
import userSaga from "./user";
import productsSaga from "./products";

export default function* rootSaga() {
  yield all([exampleSaga(), userSaga(), productsSaga()]);
}
