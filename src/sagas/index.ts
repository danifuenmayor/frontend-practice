import { all } from "redux-saga/effects";
import exampleSaga from "./example";
import userSaga from "./user";
import brandSaga from "./brands"

export default function* rootSaga() {
  yield all([exampleSaga(), userSaga(), brandSaga()]);
}
