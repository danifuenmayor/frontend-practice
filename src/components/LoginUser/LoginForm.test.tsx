import React from "react";
import { enzyme, mount } from "../../../enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LoginForm from "./LoginForm";
import TextInput from "../TextInput/TextInput";
import { Button } from "@material-ui/core";
import {} from "../../reducers/admin/actions";
import {} from "../../reducers/admin/types";
import {
  SEND_LOGIN,
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_FAIL,
} from "../../reducers/user/types";
import {
  sendLogin,
  sendLoginSuccess,
  sendLoginFail,
} from "../../reducers/user/actions";

const mockStore = configureStore();
const store = mockStore({
  user: {
    accessToken: undefined,
  },
});
let container: enzyme.ReactWrapper<
  Readonly<{}> & Readonly<{ children?: React.ReactNode }>,
  Readonly<{}>,
  React.Component<{}, {}, any>
> | null;

describe("login form actions", () => {
  const userLogin = {
    email: "some@email.com",
    password: "somePassword",
  };
  test("should send login action", () => {
    const expectedAction = {
      type: SEND_LOGIN,
      payload: userLogin,
    };
    expect(sendLogin(userLogin)).toBe(expectedAction);
  });
  test("should send success login action", () => {
    const expectedAction = {
      type: SEND_LOGIN_SUCCESS,
      payload: userLogin,
    };
    expect(sendLoginSuccess(userLogin)).toBe(expectedAction);
  });
  test("should send fail login action", () => {
    const expectedAction = {
      type: SEND_LOGIN_FAIL,
      payload: "someError",
    };
    expect(sendLoginFail("someError")).toBe(expectedAction);
  });
});

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

    // Other example whit state
    // container.find(".email").simulate("change", {
    //   target: { name: "email", value: "roddicks@gmail.com" },
    // });
  });
});
