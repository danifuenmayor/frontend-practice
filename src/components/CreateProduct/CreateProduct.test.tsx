import "../../setupTests";
import React from "react";
import { shallow, ReactWrapper, HTMLAttributes, mount } from "enzyme";
// import { findByTestAttr } from "../../test/testUtils";
import CreateProduct from "./CreateProduct";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { ProductState } from "../../../src/reducers/products/types";
import { act } from "react-dom/test-utils";

describe("MyForm", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  const mockStore = configureStore();
  const store = mockStore({
    products: {},
  });
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/123/create-product"]}>
          <CreateProduct />
        </MemoryRouter>
      </Provider>
    );
    // console.log("wrapper", wrapper);
    container = wrapper.find(CreateProduct);
    // console.log("container", container.html());
  });
  it("should render component ", () => {
    expect(container.length).toBeTruthy();
  });
  it("what happens when the form is submitted", async () => {
    const buttonSubmit = container.find('button[type="submit"]');
    buttonSubmit.simulate("click");

  });
});
