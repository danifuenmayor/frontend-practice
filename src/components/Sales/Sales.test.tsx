import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Sales from "./Sales";
import sinon from "sinon";
import {
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
} from "../../reducers/products/types";
import {
  getProduct,
  getProductSuccess,
  getProductFail,
} from "../../reducers/products/actions";

import {
  setSale,
  setSaleSuccess,
  setSaleFail,
} from "../../reducers/sales/actions";
import {
  SALE_PRODUCT,
  SALE_PRODUCT_SUCCESS,
  SALE_PRODUCT_FAIL,
} from "../../reducers/sales/types";
import SalesFormData from "./SalesFormData";
import SalesFormReview from "./SalesFormReview";
import { act } from "react-dom/test-utils";

describe("testing sales actions", () => {
  const productApiFake = {
    name: "",
    price: 1000,
    commission: 100,
    description: "",
    image: "",
  };
  const someSales = {
    name: "someName",
    lastName: "someLastName",
    rut: "someRut",
    phone: "someNumber",
    address: "someAddress",
    accessToken: "1873621713",
    productId: "123124234",
  };

  test("should return get product", () => {
    const expectedAction = {
      type: GET_PRODUCT,
      payload: productApiFake,
    };
    expect(getProduct(productApiFake)).toEqual(expectedAction);
  });
  test("getting one product fail", () => {
    const expectedAction = {
      type: GET_PRODUCT_FAIL,
      payload: "error",
    };
    expect(getProductFail("error")).toEqual(expectedAction);
  });
  test("getting one product success", () => {
    const expectedAction = {
      type: GET_PRODUCT_SUCCESS,
      payload: productApiFake,
    };
    expect(getProductSuccess(productApiFake)).toEqual(expectedAction);
  });

  test("should return sale product", () => {
    const expectedAction = {
      type: SALE_PRODUCT,
      payload: someSales,
    };
    expect(setSale(someSales)).toStrictEqual(expectedAction);
  });
  test("should return success sale ", () => {
    const expectedAction = {
      type: SALE_PRODUCT_SUCCESS,
      payload: someSales,
    };
    expect(setSaleSuccess(someSales)).toStrictEqual(expectedAction);
  });
  test("should return fail sale", () => {
    const expectedAction = {
      type: SALE_PRODUCT_FAIL,
      payload: "someError",
    };
    expect(setSaleFail("someError")).toStrictEqual(expectedAction);
  });
});

describe("form sales", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  let containerForm: ReactWrapper;
  let containerFormReview: ReactWrapper;
  let buttonNext: any;
  const onButtonClick: any = sinon.spy();

  const mockStore = configureStore();

  beforeEach(() => {
    const store = mockStore({
      user: {
        accessToken: "543264",
      },
      item: {
        name: "hola",
      },
      products: [
        {
          name: "product",
          price: 1000,
          commission: 100,
          description: "product description",
          image: "img",
          isActive: undefined,
        },
      ],
      selected: {
        item: {
          name: "product",
          price: 1000,
          commission: 100,
          description: "product description",
          image: "img",
          isActive: undefined,
        },
        loading: false,
        error: "error",
      },
      sales: {
        loading: false,
      },
      sale: {
        name: "Fake",
        lastName: "Fake LastName",
        rut: "12.345.678-9",
        phone: "123456789",
        address: "Santiago, Chile.",
        productId: "12432432",
      },
    });

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/products/1234567/sales"]}>
          <Sales onButtonClick={onButtonClick}>
            <SalesFormData />
            <SalesFormReview />
          </Sales>
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(Sales);

    buttonNext = container.find('button[data-test="btn-next"]');
  });
  it("should render component Form Data ", () => {
    containerForm = container.find(SalesFormData);
    expect(containerForm.exists()).toBeTruthy();
  });
  it("should not render component Form Review ", () => {
    containerFormReview = container.find(SalesFormReview);
    expect(containerFormReview.exists()).toBeFalsy();
  });
  it("should render component ", () => {
    expect(container.exists()).toBeTruthy();
  });
  it("what happens when the form is not complete", async () => {
    expect(buttonNext.props().disabled).toBe(false);
  });
  // it("what happens click de button next", async () => {
  //   await act(() => {
  //     container.find({ children: "Siguiente" }).first().simulate("click");
  //   });
  //   // expect(onButtonClick).to.have.property("Siguiente", 1);
  // });
});
