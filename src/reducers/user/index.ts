import {
  UserState,
  SEND_LOGIN,
  SEND_LOGIN_FAIL,
  SEND_LOGIN_SUCCESS,
  SEND_REGISTER,
  UserActions,
  SEND_REGISTER_FAIL,
  SEND_REGISTER_SUCCESS,
  EDIT_PROFILE,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
} from "./types";

const initialStateUser: UserState = {
  name: "",
  lastName: "",
  email: "",
  rut: "",
  role: "",
  accessToken: "",
  id: "",
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
      return {
        ...state,
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        role: action.payload.role,
        id: action.payload.id,
        error: undefined,
        accessToken: action.payload.accessToken,
      };

    case SEND_REGISTER:
      return state;

    case SEND_REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case SEND_REGISTER_SUCCESS:
      return state;

    case EDIT_PROFILE:
      return state;

    case EDIT_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
    default:
      return state;
  }
};
