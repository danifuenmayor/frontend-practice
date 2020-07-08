import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import EditProfile from "./EditProfile";

import {
  editProfile,
  editProfileSuccess,
  editProfileFail,
} from "../../reducers/user/actions";

import {
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
} from "../../reducers/user/types";

describe("testing edit profile actions", () => {
  const profile = {
    name: "fakeName",
    lastName: "fakeLastName",
    email: "fake@email.com",
  };
  test("should return edit action", () => {
    const expectedAction = {
      type: EDIT_PROFILE,
      payload: profile,
    };
    expect(editProfile(profile)).toEqual(expectedAction);
  });
  test("should return success edit profile action", () => {
    const expectedAction = {
      type: EDIT_PROFILE_SUCCESS,
      payload: profile,
    };
    expect(editProfileSuccess(profile)).toEqual(expectedAction);
  });
  test("should return fail edit profile action", () => {
    const expectedAction = {
      type: EDIT_PROFILE_FAIL,
      payload: "someError",
    };
    expect(editProfileFail("someError")).toEqual(expectedAction);
  });
});
describe("testing edit profile form", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  let handleSubmit: () => void;
  const mockStore = configureStore();

  beforeEach(() => {
    handleSubmit = jest.fn();
    const store = mockStore({
      user: {
        name: "",
        lastName: "",
        email: "",
        role: "",
        accessToken: "",
        id: "",
        error: null,
      },
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/edit-profile"]}>
          <EditProfile />
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(EditProfile);
  });
  test("component renders correctly", () => {
    expect(container.length).toBeTruthy();
  });
  test("what happens when the form is not submitted", async () => {
    const buttonSubmit = container.find('button[type="submit"]');
    expect(buttonSubmit.props().disabled).toBe(false);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
  test("should submit data when submit button clicked", async () => {
    await (() => {
      const formData = container.find("form");
      formData.simulate("submit");
      container.update();
    });
    await (() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
