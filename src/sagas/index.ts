import { all } from "redux-saga/effects";
import exampleSaga from "./example";
import userSaga from "./user";
import brandSaga from "./brands";
import productsSaga from "./products";
import salesSaga from "./sales";
import adminSaga from "./admin";

export const urlServer = "http://localhost:3000/";

export default function* rootSaga() {
  yield all([exampleSaga(), userSaga(), brandSaga(), productsSaga(), salesSaga(),  adminSaga(),]);


