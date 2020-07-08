import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CreateBrand from "./CreateBrand";

import {
  CREATE_ONE_BRAND,
  CREATE_ONE_BRAND_SUCCESS,
  CREATE_ONE_BRAND_FAIL,
} from "../../reducers/brands/types";

import {
  createOneBrand,
  createOneBrandSuccess,
  createOneBrandFail,
} from "../../reducers/brands/actions";

describe("testing brand creation actions", () => {
  const fakeBrand = {
    name: "Sonya",
    image: "img.url",
    brands: [],
  };
  test("creating one brand action", () => {
    const expectedAction = {
      type: CREATE_ONE_BRAND,
      payload: fakeBrand,
    };
    expect(createOneBrand(fakeBrand)).toEqual(expectedAction);
  });
  test("creating one brand action success", () => {
    const expectedAction = {
      type: CREATE_ONE_BRAND_SUCCESS,
      payload: fakeBrand,
    };
    expect(createOneBrandSuccess(fakeBrand)).toEqual(expectedAction);
  });
  test("creating one brand fail", () => {
    const expectedAction = {
      type: CREATE_ONE_BRAND_FAIL,
      payload: "fakeError",
    };
    expect(createOneBrandFail("fakeError")).toEqual(expectedAction);
  });
});

describe("testing brand creation form", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  let handleSubmit: () => void;
  const mockStore = configureStore();

  beforeEach(() => {
    handleSubmit = jest.fn();
    const store = mockStore({
      brands: {},
      success: false,
      onSubmit: handleSubmit,
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/create-brand"]}>
          <CreateBrand />
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(CreateBrand);
  });
  test("component renders correctly", () => {
    expect(container.length).toBeTruthy();
  });
  test("submit button can be used to submit", () => {
    const buttonSubmit = container.find('button[type="submit"]');
    expect(buttonSubmit.props().disabled).toBe(false);
  });
  test("succesfully sent when data in form", async () => {
    const inputName = container.find('input[name="name"]');
    const inputImage = container.find('input[type="file"]');

    expect(handleSubmit).toHaveBeenCalledTimes(0);

    const file = new Blob(["fileContents"], { type: "text/plain" });

    inputName.simulate("change", {
      target: { name: "name", value: "newBrand" },
    });
    inputImage.simulate("change", { target: { files: [file] } });

    const formData = container.find("form");
    formData.simulate("submit");

    container.update();
    await (() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
