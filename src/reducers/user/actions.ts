import {
  PayloadLogin,
  SEND_LOGIN,
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_FAIL,
  SendLoginAction,
  SendLoginSuccessAction,
  SendLoginFailAction,
  PayloadRegister,
  SEND_REGISTER,
  SEND_REGISTER_SUCCESS,
  SendRegisterAction,
  SendRegisterFailAction,
  SendRegisterSuccessAction,
  SEND_REGISTER_FAIL,
} from "./types";

// Login Actions
export function sendLogin(newLogin: PayloadLogin): SendLoginAction {
  return {
    type: SEND_LOGIN,
    payload: newLogin,
  };
}
export function sendLoginSuccess(
  newLogin: PayloadLogin
): SendLoginSuccessAction {
  return {
    type: SEND_LOGIN_SUCCESS,
    payload: newLogin,
  };
}
export function sendLoginFail(error: string): SendLoginFailAction {
  return {
    type: SEND_LOGIN_FAIL,
    payload: error,
  };
}
// Register Actions
export function sendRegister(newRegister: PayloadRegister): SendRegisterAction {
  return {
    type: SEND_REGISTER,
    payload: newRegister,
  };
}
export function sendRegisterSuccess(
  newRegister: PayloadRegister
): SendRegisterSuccessAction {
  return {
    type: SEND_REGISTER_SUCCESS,
    payload: newRegister,
  };
}
export function sendRegisterFail(error: string): SendRegisterFailAction {
  return {
    type: SEND_REGISTER_FAIL,
    payload: error,
  };
}
