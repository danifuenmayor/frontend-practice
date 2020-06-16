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
      return  {
        ...state,
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        role: action.payload.role,
        accessToken: action.payload.accessToken,
        id: action.payload.id,
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
        ...state,
        email: action.payload.email,
        isActive: action.payload.isActive,
      };

    default:
      return state;
  }
};
