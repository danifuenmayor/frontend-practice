import {
  Message,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  SendMessageAction,
  SendMessageSuccessAction,
  SendMessageFailAction,
} from "./types";

export function sendMessage(newMessage: Message): SendMessageAction {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}
export function sendMessageSuccess(
  newMessage: Message
): SendMessageSuccessAction {
  return {
    type: SEND_MESSAGE_SUCCESS,
    payload: newMessage,
  };
}
export function sendMessageFail(error: string): SendMessageFailAction {
  return {
    type: SEND_MESSAGE_FAIL,
    payload: {
      error,
    },
  };
}
