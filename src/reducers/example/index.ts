import {
  ExampleState,
  ExampleActionTypes,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
} from "./types";

const initialState: ExampleState = {
  list: [],
};

export function exampleReducer(
  state = initialState,
  action: ExampleActionTypes
): ExampleState {
  switch (action.type) {
    case SEND_MESSAGE:
      return state;

    case SEND_MESSAGE_SUCCESS:
      return {
        list: [...state.list, action.payload],
      };

    case SEND_MESSAGE_FAIL:
      return state;

    default:
      return state;
  }
}
