//example
export interface Form {
  fullname: string;
  mail: string;
}

export interface StateForm {
  formUser: Form;
}

export const SEND_FORM = "EXAMPLE/SEND_FORM";

export interface SendFormExample {
  type: typeof SEND_FORM;
  payload: Form;
}

export type ExampleSendForm = SendFormExample;
