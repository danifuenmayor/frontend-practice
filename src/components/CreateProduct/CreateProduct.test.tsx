import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { render } from "@testing-library/react";

import CreateProduct from "./CreateProduct";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { Formik } from "formik";
import { Button } from "@material-ui/core";

describe("MyForm", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  const handleSubmit = jest.fn();
  let store: MockStoreEnhanced<any>;

  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore({
      products: {},
      success: false,
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/123/create-product"]}>
          <CreateProduct />
        </MemoryRouter>
      </Provider>
    );

    container = wrapper.find(CreateProduct);
  });
  it("should render component ", () => {
    expect(container.length).toBeTruthy();
  });
  it("what happens when the form is not submitted", async () => {
    const buttonSubmit = container.find('button[type="submit"]');
    expect(buttonSubmit.props().disabled).toBe(false);
  });
  it("should set success to true when submit", async () => {
    let buttonSubmit = container.find('Button[data-test="btn-form"]');

    console.log("button ", buttonSubmit);

    const nameField = container.find('input[name="name"]');
    const descriptionField = container.find('input[name="description"]');
    const priceField = container.find('input[name="price"]');
    const commissionField = container.find('input[name="commission"]');
    const imageField = container.find('input[type="file"]');

    nameField.simulate("change", { target: { name: "name", value: "estufa" } });
    descriptionField.simulate("change", {
      target: { name: "description", value: "mega potente super duper" },
    });
    priceField.simulate("change", { target: { name: "price", value: 40000 } });
    commissionField.simulate("change", {
      target: { name: "commission", value: 4000 },
    });
    imageField.simulate("change", {
      target: {
        files: [
          "https://pixabay.com/es/photos/ave-loro-animales-pluma-colorido-4887736/",
        ],
      },
    });

    expect(buttonSubmit.props().disabled).toBe(false);

    // const formData: any = container.find("form");
    // formData.onSubmit = handleSubmit;
    // formData.simulate("submit");
    // container.update();

    const formik: any = container.find(Formik);
    // formik.props().onSubmit();

    buttonSubmit.simulate("click");

    const actions = store.getActions();
    console.log("actions ", actions);
  });
});
