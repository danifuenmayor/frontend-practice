import {
  AdminState,
  AdminActions,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
} from "./types";

const initialStateAdmin: AdminState = {
  name: "",
  lastName: "",
  email: "",
  error: "",
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
    default:
      return state;
  }
};
