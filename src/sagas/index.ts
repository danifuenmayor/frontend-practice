import { all } from "redux-saga/effects";
import exampleSaga from "./example";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([exampleSaga(), userSaga()]);
}
