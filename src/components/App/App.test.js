import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createMockStore } from "redux-test-utils";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import Home from "../Home/Home";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders home", () => {
  const wrapper = mount(
    <Provider store={createMockStore({})}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});
