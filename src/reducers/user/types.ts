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
  email: string;
  password: string;
  name: string;
  lastName: string;
  role: string;
  accessToken: string;
  error?: string;
  id: string;
}

// Edit Payload
export interface PayloadEdit {
  name: string;
  lastName: string;
  email: string;
}
// Logout Payload
export interface PayloadLogout {
  accessToken: string;
  error?: string;
}
// User state
export interface UserState {
  name: string;
  lastName: string;
  email: string;
  role: string;
  accessToken: string;
  id: string;
  error?: string;
}

// Login action names
export const SEND_LOGIN = "USER/SEND_LOGIN";
export const SEND_LOGIN_SUCCESS = "USER/SEND_LOGIN_SUCCESS";
export const SEND_LOGIN_FAIL = "USER/SEND_LOGIN_FAIL";

// Logout action names
export const SEND_LOGOUT = "USER/SEND_LOGOUT";
export const SEND_LOGOUT_SUCCESS = "USER/SEND_LOGOUT_SUCCESS";
export const SEND_LOGOUT_FAIL = "USER/SEND_LOGOUT";

// Register action names
export const SEND_REGISTER = "USER/SEND_REGISTER";
export const SEND_REGISTER_SUCCESS = "USER/SEND_REGISTER_SUCCESS";
export const SEND_REGISTER_FAIL = "USER/SEND_REGISTER_FAIL";

// EditProfile action names
export const EDIT_PROFILE = "USER/EDIT_PROFILE";
export const EDIT_PROFILE_SUCCESS = "USER/EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAIL = "USER/EDIT_PROFILE_FAIL";

//EditProfile action types
export interface EditProfileAction {
  type: typeof EDIT_PROFILE;
  payload: PayloadEdit;
}
export interface EditProfileFailAction {
  type: typeof EDIT_PROFILE_FAIL;
  payload: string;
}
export interface EditProfileSuccessAction {
  type: typeof EDIT_PROFILE_SUCCESS;
  payload: PayloadEdit;
}

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
// Logout action types
export interface SendLogoutAction {
  type: typeof SEND_LOGOUT;
  payload: PayloadLogout;
}
export interface SendLogoutFailAction {
  type: typeof SEND_LOGOUT_FAIL;
  payload: string;
}
export interface SendLogoutSuccessAction {
  type: typeof SEND_LOGOUT_SUCCESS;
  payload: PayloadLogout;
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
  | SendRegisterSuccessAction
  | EditProfileAction
  | EditProfileFailAction
  | EditProfileSuccessAction
  | SendLogoutAction
  | SendLogoutFailAction
  | SendLogoutSuccessAction;
