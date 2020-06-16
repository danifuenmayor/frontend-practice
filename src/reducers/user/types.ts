// Login payload
export interface PayloadLogin {
  email: string;
  password: string;
  name: string;
  lastName: string;
  role: string;
  accessToken: string;
  error?: string;
  id: string;
}
// Register payload
export interface PayloadRegister {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isActive: string;
}

// User state
export interface UserState {
  name: string;
  lastName: string;
  email: string;
  rut: string;
  role: string;
  accessToken: string;
  id: string;
  error?: string;
  isActive?: string;
}

// Login action names
export const SEND_LOGIN = "USER/SEND_LOGIN";
export const SEND_LOGIN_SUCCESS = "USER/SEND_LOGIN_SUCCESS";
export const SEND_LOGIN_FAIL = "USER/SEND_LOGIN_FAIL";

// Register action names
export const SEND_REGISTER = "USER/SEND_REGISTER";
export const SEND_REGISTER_SUCCESS = "USER/SEND_REGISTER_SUCCESS";
export const SEND_REGISTER_FAIL = "USER/SEND_REGISTER_FAIL";

// Login action types
export interface SendLoginAction {
  type: typeof SEND_LOGIN;
  payload: PayloadLogin;
}
export interface SendLoginFailAction {
  type: typeof SEND_LOGIN_FAIL;
  payload: string;
}
export interface SendLoginSuccessAction {
  type: typeof SEND_LOGIN_SUCCESS;
  payload: PayloadLogin;
}

// Register action types
export interface SendRegisterAction {
  type: typeof SEND_REGISTER;
  payload: PayloadRegister;
}
export interface SendRegisterFailAction {
  type: typeof SEND_REGISTER_FAIL;
  payload: string;
}
export interface SendRegisterSuccessAction {
  type: typeof SEND_REGISTER_SUCCESS;
  payload: PayloadRegister;
}
export type UserActions =
  | SendLoginAction
  | SendLoginFailAction
  | SendLoginSuccessAction
  | SendRegisterAction
  | SendRegisterFailAction
  | SendRegisterSuccessAction;
