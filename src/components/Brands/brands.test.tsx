import "../../setupTests";
import React from "react";
import { shallow, ReactWrapper, HTMLAttributes, mount } from "enzyme";
import BrandsHome from "./BrandsHome";
import Brands from "./brands";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { act } from "react-dom/test-utils";
import { Container, Box, Button } from "@material-ui/core";

import {
  GET_ONE_BRAND,
  GET_ONE_BRAND_SUCCESS,
  GET_ONE_BRAND_FAIL,
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_FAIL,
  GET_ALL_BRANDS_SUCCESS,
} from "../../reducers/brands/types";

import {
  getAllBrands,
  getAllBrandsSuccess,
  getAllBrandsFail,
} from "../../reducers/brands/actions";

describe("testing getting brands action", () => {
  test("getting brands", () => {
    const expectedAction = {
      type: GET_ALL_BRANDS,
    };
    expect(getAllBrands()).toEqual(expectedAction);
  });

  test("getting brands fail", () => {
    const expectedAction = {
      type: GET_ALL_BRANDS_FAIL,
      payload: "error",
    };
    expect(getAllBrandsFail("error")).toEqual(expectedAction);
  });

  test("getting brands success", () => {
    const fakeBrand = {
      name: "Sonya",
      image: "img.url",
      id: "fakeBrandId01",
    };
    const expectedAction = {
      type: GET_ALL_BRANDS_SUCCESS,
      payload: [fakeBrand],
    };
    expect(getAllBrandsSuccess([fakeBrand])).toEqual(expectedAction);
  });
});

describe("Brands View", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  const mockStore = configureStore();
  beforeEach(() => {
    const store = mockStore({
      user: {
        accessToken: "sometoken",
        role: "admin",
      },
      brands: [
        {
          id: "someId01",
          name: "someName",
          image: "urlToImage",
        },
      ],
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/brands"]}>
          <BrandsHome />
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(BrandsHome).find(Brands);
  });

  test("should render component ", () => {
    expect(container.length).toBeTruthy();
  });
  test("test button for new brand creation", async () => {
    const button: ReactWrapper = container.find(
      "button[test-label='create-brand']"
    );
    const click = button.simulate("click", {
      preventDefault: () => {},
    });
    expect(click).toBeTruthy();
  });
});
