import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createMockStore } from "redux-test-utils";
import { shallow, mount } from "enzyme";
import CreateProduct from "./CreateProduct";
import { findByTestAttr } from "../../test/testUtils";

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={createMockStore({})}>
        <CreateProduct />
      </Provider>
    </MemoryRouter>
  );
};

test("CreateProduct is rendering", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "create-product-component");
  expect(appComponent).toBeTruthy();
});

describe("Form does not allow to submit with fields uncompleted", () => {
  const wrapper = setup();
  const form = findByTestAttr(wrapper, "form-test");
  test("component renders the form", () => {
    expect(form).toBeTruthy;
  });
  test("check if initiates with empty values", () => {});
  test("returns error when submiting with one field completed", () => {});
  test("returns error when submiting with two fields completed", () => {});
});
