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
  SEND_LOGOUT,
  SEND_LOGIN_CLEAR,
} from "./types";

const initialStateUser: UserState = {
  name: "",
  lastName: "",
  email: "",
  role: "",
  accessToken: "",
  id: "",
  error: undefined,
};

// Reducers
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
    case SEND_LOGIN_CLEAR:
      return {
        ...state,
        error: undefined,
      };

    case SEND_REGISTER:
      return state;

    case SEND_REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case SEND_REGISTER_SUCCESS:
      return {
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        role: action.payload.role,
        id: action.payload.id,
        error: undefined,
        accessToken: action.payload.accessToken,
      };

    case EDIT_PROFILE:
      return {
        ...state,
        loading: true,
      };

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
        loading: false,
      };
    case SEND_LOGOUT:
      return {
        ...state,
        name: "",
        lastName: "",
        email: "",
        role: "",
        accessToken: "",
        id: "",
      };

    default:
      return state;
  }
};
