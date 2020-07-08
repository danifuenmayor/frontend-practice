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
