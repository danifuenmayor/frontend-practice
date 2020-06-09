import {Form, ExampleSendForm, SEND_FORM } from './types';


export function sendFormExample(newForm: Form): ExampleSendForm {
    return {
      type: SEND_FORM,
      payload: newForm,
    };
  }