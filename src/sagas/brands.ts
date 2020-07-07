import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";
import {
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_SUCCESS,
  GET_ALL_BRANDS_FAIL,
  GetAllBrandsAction,
  GetAllBrandsSuccessAction,
  GetAllBrandsFailAction,
  DELETE_ONE_BRAND,
  DELETE_ONE_BRAND_SUCCESS,
  DELETE_ONE_BRAND_FAIL,
  DeleteOneBrandAction,
  DeleteOneBrandSuccessAction,
  DeleteOneBrandFailAction,
  EDIT_BRAND,
  EDIT_BRAND_SUCCESS,
  EDIT_BRAND_FAIL,
  EditBrandAction,
  EditBrandSuccessAction,
  EditBrandFailAction,
  CREATE_ONE_BRAND,
  CREATE_ONE_BRAND_FAIL,
  CREATE_ONE_BRAND_SUCCESS,
  CreateOneBrandAction,
  CreateOneBrandFailAction,
  CreateOneBrandSuccessAction,
  GET_ONE_BRAND,
  GET_ONE_BRAND_SUCCESS,
  GET_ONE_BRAND_FAIL,
  GetBrandAction,
  GetBrandSuccessAction,
  GetBrandFailAction,
} from "../reducers/brands/types";

const urlServer = "http://localhost:3000/";

function* getAllBrands() {
  yield takeLatest(GET_ALL_BRANDS, function* (action: GetAllBrandsAction) {
    try {
      const response = yield call(axios.get, `${urlServer}brands`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      yield put<GetAllBrandsSuccessAction>({
        type: GET_ALL_BRANDS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      const spanishError = err.response.data.error.errors[0].messages.es;
      yield put<GetAllBrandsFailAction>({
        type: GET_ALL_BRANDS_FAIL,
        payload: spanishError,
      });
    }
  });
}
function* deleteBrand() {
  yield takeLatest(DELETE_ONE_BRAND, function* (action: DeleteOneBrandAction) {
    try {
      const { payload } = action;
      const response = yield call(
        axios.delete,
        `${urlServer}brands/${payload}`
      );
      yield put<DeleteOneBrandSuccessAction>({
        type: DELETE_ONE_BRAND_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      const spanishError = err.response.data.error.errors[0].messages.es;
      yield put<DeleteOneBrandFailAction>({
        type: DELETE_ONE_BRAND_FAIL,
        payload: spanishError,
      });
    }
  });
}
function* editBrand() {
  yield takeLatest(EDIT_BRAND, function* (action: EditBrandAction) {
    try {
      const { payload } = action;

      const form = new FormData();
      form.append("image", payload.image);

      const uploadResponse = yield call(
        axios.post,
        `${urlServer}upload`,

        form,

        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const response = yield call(
        axios.put,
        `${urlServer}brands/${payload.id}`,
        {
          name: payload.name,
          image: uploadResponse.data.Location,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      yield put<EditBrandSuccessAction>({
        type: EDIT_BRAND_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      const spanishError = err.response.data.error.errors[0].messages.es;
      yield put<EditBrandFailAction>({
        type: EDIT_BRAND_FAIL,
        payload: spanishError,
      });
    }
  });
}
function* createBrand() {
  yield takeLatest(CREATE_ONE_BRAND, function* (action: CreateOneBrandAction) {
    try {
      const { payload } = action;
      const form = new FormData();
      form.append("image", payload.image);
      const uploadResponse = yield call(
        axios.post,
        `${urlServer}upload`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const response = yield call(
        axios.post,
        `${urlServer}brands/`,
        {
          name: payload.name,
          image: uploadResponse.data.Location,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      yield put<CreateOneBrandSuccessAction>({
        type: CREATE_ONE_BRAND_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      const spanishError = err.response.data.error.errors[0].messages.es;
      yield put<CreateOneBrandFailAction>({
        type: CREATE_ONE_BRAND_FAIL,
        payload: spanishError,
      });
    }
  });
}
function* getBrand() {
  yield takeLatest(GET_ONE_BRAND, function* (action: GetBrandAction) {
    try {
      const { payload } = action;
      const response = yield call(axios.get, `${urlServer}brands/${payload}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      yield put<GetBrandSuccessAction>({
        type: GET_ONE_BRAND_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      const spanishError = err.response.data.error.errors[0].messages.es;
      yield put<GetBrandFailAction>({
        type: GET_ONE_BRAND_FAIL,
        payload: spanishError,
      });
    }
  });
}

export default function* saga() {
  yield fork(getAllBrands);
  yield fork(editBrand);
  yield fork(deleteBrand);
  yield fork(createBrand);
  yield fork(getBrand);
}
