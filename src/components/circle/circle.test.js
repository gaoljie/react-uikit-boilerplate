import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import theme from "../theme";

import Circle from "./index";

const props = {
  color: "black",
  width: "3px"
};

describe("Test Circle", () => {
  it("Matches the snapshot", () => {
    const wrapper = mount(<Circle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Styling", () => {
    const wrapper = mount(<Circle />);

    expect(wrapper).toHaveStyleRule("width", "2px");
    expect(wrapper).toHaveStyleRule("height", "2px");
    expect(wrapper).toHaveStyleRule("background-color", theme.primary);

    wrapper.setProps({ width: "3px", color: "black" });

    expect(wrapper).toHaveStyleRule("width", "3px");
    expect(wrapper).toHaveStyleRule("height", "3px");
    expect(wrapper).toHaveStyleRule("background-color", "black");

    wrapper.setProps({ half: true });

    expect(wrapper).toHaveStyleRule("background-color", "white");
  });
});
