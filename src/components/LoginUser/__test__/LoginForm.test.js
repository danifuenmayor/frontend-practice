import React from "react";
import { mount } from "../../../../enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LoginForm from "../LoginForm";
import TextInput from "../../TextInput/TextInput";
import { Button } from "@material-ui/core";

const mockStore = configureStore();
const store = mockStore({
  user: {
    accessToken: undefined,
  },
});
let container;

describe("Login Form", () => {
  beforeEach(() => {
    container = mount(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  });

  afterEach(() => {
    container = null;
  });

  it("should render login form", () => {
    expect(container.find(".email").length).toEqual(1);
    expect(container.find(TextInput).length).toEqual(2);
    expect(container.find("div.error").length).toEqual(0);
    expect(container.find(Button).length).toEqual(2);

    //Other example whit state
    // container.find(".email").simulate("change", {
    //   target: { name: "email", value: "roddicks@gmail.com" },
    // });
  });
});
