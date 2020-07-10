import "../../setupTests";
import React from "react";
import { shallow, ReactWrapper, HTMLAttributes, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../../reducers/admin/types";
import {
  getUsers,
  getUsersSuccess,
  getUsersFail,
} from "../../reducers/admin/actions";
import UserList from "./UserList";
import UserCard from "./UserCard";

describe("render get all users", () => {
  const users = {
    users: [
      {
        isActive: true,
        name: "Lucas",
        lastName: "González",
        email: "lucas@test.com",
        id: "fakeUserId1234",
      },
    ],
  };
  test("get users", () => {
    const expectedAction = {
      type: GET_USERS,
      payload: users,
    };
    expect(getUsers(users)).toEqual(expectedAction);
  });
  test("get users fail", () => {
    const expectedAction = {
      type: GET_USERS_FAIL,
      payload: "error",
    };
    expect(getUsersFail("error")).toEqual(expectedAction);
  });
  test("get users success", () => {
    const usersTest = {
      isActive: true,
      name: "Lucas",
      lastName: "González",
      email: "lucas@test.com",
      id: "fakeUserId1234",
    };
    const expectedAction = {
      type: GET_USERS_SUCCESS,
      payload: [usersTest],
    };
    expect(getUsersSuccess([usersTest])).toEqual(expectedAction);
  });
});
describe("User List View", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  const mockStore = configureStore();
  beforeEach(() => {
    const store = mockStore({
      user: {
        accessToken: "fakeTokenAdmin",
        role: "admin",
      },
      admin: {
        users: [
          {
            isActive: true,
            name: "Lucas",
            lastName: "González",
            email: "lucas@test.com",
            id: "fakeUserId1234",
            role: "user",
          },
        ],
      },
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/show-users"]}>
          <UserList />
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(UserList).find(UserCard);
  });
  test("should render component ", () => {
    expect(container.length).toBeTruthy();
  });
  test("test button for edit user", async () => {
    const button = container.find("button[data-test='btn-edit-user']");
    expect(button).toBeTruthy();
  });
});
