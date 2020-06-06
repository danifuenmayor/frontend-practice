export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface Error {
  error: string;
}

// State
export interface ExampleState {
  list: Message[];
}

// Actions
export const SEND_MESSAGE = "EXAMPLE/SEND_MESSAGE";
export const SEND_MESSAGE_SUCCESS = "EXAMPLE/SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAIL = "EXAMPLE/SEND_MESSAGE_FAIL";

export interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

export interface SendMessageSuccessAction {
  type: typeof SEND_MESSAGE_SUCCESS;
  payload: Message;
}

export interface SendMessageFailAction {
  type: typeof SEND_MESSAGE_FAIL;
  payload: Error;
}

export type ExampleActionTypes =
  | SendMessageAction
  | SendMessageSuccessAction
  | SendMessageFailAction;
