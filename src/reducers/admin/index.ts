import {
  AdminState,
  AdminActions,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  EDIT_USER,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
  GET_ONE_USER,
  GET_ONE_USER_FAIL,
  GET_ONE_USER_SUCCESS,
} from "./types";

const initialStateAdmin: AdminState = {
  name: "",
  lastName: "",
  email: "",
  error: undefined,
  users: [],
};

export const AdminReducer = (
  state = initialStateAdmin,
  action: AdminActions
): AdminState => {
  switch (action.type) {
    case GET_USERS:
      return state;

    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_ONE_USER:
      return {
        ...state,
        selected: {
          loading: true,
        },
      };

    case GET_ONE_USER_FAIL:
      return {
        ...state,
        selected: {
          error: action.payload,
        },
      };

    case GET_ONE_USER_SUCCESS:
      return {
        ...state,
        selected: {
          user: action.payload,
        },
      };

    case EDIT_USER:
      return state;

    case EDIT_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case EDIT_USER_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
