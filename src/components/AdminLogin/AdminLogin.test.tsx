import React from "react";
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
import configureStore from "redux-mock-store";
import { ReactWrapper, mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import TextInput from "../TextInput/TextInput";
import { Button } from "@material-ui/core";
import {} from "../../reducers/admin/actions";
import {} from "../../reducers/admin/types";

const mockStore = configureStore();
let handleSubmit: () => void;
const store = mockStore({
  user: {
    name: "JUAN",
    lastName: "MARTINEZ",
    email: "test8@example.com",
    role: "user",
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    id: "5eea8704983e5e194097155e",
  },
});
let container: ReactWrapper;

describe("admin send login user actions", () => {
  it("should return an action", () => {
    const values = {
      name: "daniela",
      lastName: "fuenmayor",
      role: "admin",
      accessToken: "accessToken",
      email: "luissanchez@gmail.com",
      password: "1234",
      id: "id",
    };
    const expectedAction = {
      type: SEND_LOGIN,
      payload: values,
    };
    expect(sendLogin(values)).toEqual(expectedAction);
  });
  it("should return an action post sendLogin success", () => {
    const values = {
      name: "daniela",
      lastName: "fuenmayor",
      role: "admin",
      accessToken: "accessToken",
      email: "luissanchez@gmail.com",
      password: "1234",
      id: "id",
    };
    const expectedAction = {
      type: SEND_LOGIN_SUCCESS,
      payload: values,
    };
    expect(sendLoginSuccess(values)).toEqual(expectedAction);
  });
  it("should return an action post getOneUSer fail", () => {
    const expectedAction = {
      type: SEND_LOGIN_FAIL,
      payload: "error",
    };
    expect(sendLoginFail("error")).toEqual(expectedAction);
  });
});
describe("Login Form", () => {
  beforeEach(() => {
    handleSubmit = jest.fn();
    container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <AdminLogin />
        </MemoryRouter>
      </Provider>
    );
  });

  it("should render login form", () => {
    expect(container.find(TextInput).length).toEqual(2);
    expect(container.find("div.error").length).toEqual(0);
    expect(container.find(Button).length).toEqual(2);
  });
});

test("what happens when the form is not submitted", async () => {
  const submitButton = container.find('button[type="submit"]');
  expect(submitButton.props().disabled).toBe(false);
  expect(handleSubmit).toHaveBeenCalledTimes(0);
});
test("should submit data when submit button clicked", async () => {
  const submitButton = container.find('button[type="submit"]');
  submitButton.simulate("click");
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  container.update();
  await (() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(submitButton.props().disabled).toBe(false);
    const file = new Blob(["fileContents"], { type: "text/plain" });
    const emailInput = container.find('input[name="email"]');
    const passwordInput = container.find('input[name="password"]');
    emailInput.simulate("change", {
      target: { name: "email", value: "danif@gmail.com" },
    });
    passwordInput.simulate("change", {
      target: { name: "password", value: "12345" },
    });
  });
  await (() => {
    const formData = container.find("form");
    formData.simulate("submit");
    container.update();
  });
  await (() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
test("form should not submit if not all inputs are fullfilled", async () => {
  const submitButton = container.find('button[type="submit"]');
  submitButton.simulate("click");
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  container.update();
  await (() => {
    const formData = container.find("form");
    formData.simulate("submit");
    container.update();
  });
  await (() => {
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});
