import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import EditBrand from "./EditBrand";

import {
  EDIT_BRAND,
  EDIT_BRAND_SUCCESS,
  EDIT_BRAND_FAIL,
} from "../../reducers/brands/types";

import {
  editBrand,
  editBrandSuccess,
  editBrandFail,
} from "../../reducers/brands/actions";

describe("testing edit brands actions", () => {
  test("should return edit brand action", () => {
    const editedBrand = {
      name: "newName",
      image: "newImage",
    };
    const expectedAction = {
      type: EDIT_BRAND,
      payload: editedBrand,
    };
    expect(editBrand(editedBrand)).toEqual(expectedAction);
  });
  test("should return success action when editedbrand successfully", () => {
    const editedBrand = {
      name: "newName",
      image: "newImage",
    };

    const expectedAction = {
      type: EDIT_BRAND_SUCCESS,
      payload: editedBrand,
    };
    expect(editBrandSuccess(editedBrand)).toEqual(expectedAction);
  });
  test("should expect error for failed edit brand action", () => {
    const expectedAction = {
      type: EDIT_BRAND_FAIL,
      payload: "someError",
    };
    expect(editBrandFail("someError")).toEqual(expectedAction);
  });
});
describe("testing edit brand form", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  let handleClick: () => void;
  let handleSubmit: () => void;
  const mockStore = configureStore();

  beforeEach(() => {
    handleClick = jest.fn();
    handleSubmit = jest.fn();
    const store = mockStore({
      brands: {
        selected: {
          item: { name: "notEditedName", image: "notEditedImage" },
        },
        editedBrand: {
          loading: false,
          success: null,
          error: null,
          name: "",
          image: "",
        },
      },
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/edit-brand"]}>
          <EditBrand />
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(EditBrand);
  });
  test("component renders correctly", () => {
    expect(container.length).toBeTruthy();
  });
  test("what happens when the form is not submitted", async () => {
    const buttonEdit = container.find('button[type="button"]').last();
    expect(buttonEdit.props().disabled).toBe(false);
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
  test("should submit data when submit button clicked", async () => {
    const buttonEdit = container.find('button[type="button"]').last();
    buttonEdit.simulate("click");
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    const buttonSubmit = container.find('button[type="submit"]');
    container.update();
    await (() => {
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(buttonSubmit.props().disabled).toBe(false);
      const file = new Blob(["fileContents"], { type: "text/plain" });
      const inputName = container.find('input[name="name"]');
      const inputImage = container.find('input[type="file"]');
      inputName.simulate("change", {
        target: { name: "name", value: "editedBrandName" },
      });
      inputImage.simulate("change", { target: { files: [file] } });
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
    const buttonEdit = container.find('button[type="button"]').last();
    buttonEdit.simulate("click");
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
});
