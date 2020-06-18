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
  PayloadEdit,
  EditProfileAction,
  EDIT_PROFILE,
  EditProfileSuccessAction,
  EDIT_PROFILE_SUCCESS,
  EditProfileFailAction,
  EDIT_PROFILE_FAIL,
  PayloadLogout,
  SEND_LOGOUT,
  SendLogoutAction,
  SendLogoutSuccessAction,
  SEND_LOGOUT_SUCCESS,
  SendLogoutFailAction,
  SEND_LOGOUT_FAIL,
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
// EditProfile Actions
export function editProfile(newProfile: PayloadEdit): EditProfileAction {
  return {
    type: EDIT_PROFILE,
    payload: newProfile,
  };
}
export function editProfileSuccess(
  newProfile: PayloadEdit
): EditProfileSuccessAction {
  return {
    type: EDIT_PROFILE_SUCCESS,
    payload: newProfile,
  };
}
export function editProfileFail(error: string): EditProfileFailAction {
  return {
    type: EDIT_PROFILE_FAIL,
    payload: error,
  };
}

export function sendLogout(logout: PayloadLogout): SendLogoutAction {
  return {
    type: SEND_LOGOUT,
    payload: logout,
  };
}
export function sendLogoutSucess(
  logout: PayloadLogout
): SendLogoutSuccessAction {
  return {
    type: SEND_LOGOUT_SUCCESS,
    payload: logout,
  };
}
export function sendLogoutFail(error: string): SendLogoutFailAction {
  return {
    type: SEND_LOGOUT_FAIL,
    payload: error,
  };
}
