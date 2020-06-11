import {
  UserState,
  SEND_LOGIN,
  SEND_LOGIN_FAIL,
  SEND_LOGIN_SUCCESS,
  SEND_REGISTER,
  UserActions,
  SEND_REGISTER_FAIL,
  SEND_REGISTER_SUCCESS,
} from "./types";

const initialStateUser: UserState = {
  name: "",
  lastname: "",
  email: "",
  rut: "",
  role: "",
  access_token: "",
};

export const UserReducer = (
  state = initialStateUser,
  action: UserActions
): UserState => {
  switch (action.type) {
    case SEND_LOGIN:
      return state;

    case SEND_LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case SEND_LOGIN_SUCCESS:
      return state;

    case SEND_REGISTER:
      return state;

    case SEND_REGISTER_FAIL:
      return state;

    case SEND_REGISTER_SUCCESS:
      return state;

    default:
      return state;
  }
};
