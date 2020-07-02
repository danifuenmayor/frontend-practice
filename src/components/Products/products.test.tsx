import React from "react";
import { shallow } from "enzyme";
import Products from "./products";

const defaultProps = {
  products: [
    {
      image: "",
      name: "estufa",
      price: 1000,
      commission: 100,
      description: "una estufa bonita",
      id: "097jjdh89",
    },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Products {...setupProps} />);
};

test("component is rendered", () => {});
