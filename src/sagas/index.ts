import { all } from "redux-saga/effects";
import userSaga from "./user";
import brandSaga from "./brands";
import productsSaga from "./products";
import salesSaga from "./sales";
import adminSaga from "./admin";

export default function* rootSaga() {
  yield all([
    userSaga(),
    brandSaga(),
    productsSaga(),
    salesSaga(),
    adminSaga(),
  ]);
}
