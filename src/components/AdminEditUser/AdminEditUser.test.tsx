import {
  GET_ONE_USER,
  GET_ONE_USER_SUCCESS,
  GET_ONE_USER_FAIL,
} from "../../reducers/admin/types";
import {
  getOneUser,
  getOneUserSuccess,
  getOneUserFail,
} from "../../reducers/admin/actions";
describe("admin get one user actions", () => {
  it("should return an action", () => {
    const user = {
      name: "luis",
      lastName: "sanchez",
      email: "luissanchez@gmail.com",
      id: "6",
      isActive: true,
    };
    const expectedAction = {
      type: GET_ONE_USER,
      payload: user,
    };
    expect(getOneUser(user)).toEqual(expectedAction);
  });
  it("should return an action post getOneUser success", () => {
    const user = {
      name: "luis",
      lastName: "sanchez",
      email: "luissanchez@gmail.com",
      id: "6",
      isActive: true,
    };
    const expectedAction = {
      type: GET_ONE_USER_SUCCESS,
      payload: user,
    };
    expect(getOneUserSuccess(user)).toEqual(expectedAction);
  });
  it("should return an action post getOneUSer fail", () => {
    const expectedAction = {
      type: GET_ONE_USER_FAIL,
      payload: "error",
    };
    expect(getOneUserFail("error")).toEqual(expectedAction);
  });
});
