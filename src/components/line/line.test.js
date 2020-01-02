import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";

import Line from "./index";
import theme from "../theme";

const props = {
  height: "5px",
  color: "black"
};

describe("Test Line", () => {
  it("Matches the snapshot", () => {
    const wrapper = mount(<Line {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Styling", () => {
    const wrapper = mount(<Line />);

    expect(wrapper).toHaveStyleRule("height", "2px");
    expect(wrapper).toHaveStyleRule("background-color", theme.primary);

    wrapper.setProps({ height: "3px", color: "black" });

    expect(wrapper).toHaveStyleRule("height", "3px");
    expect(wrapper).toHaveStyleRule("background-color", "black");
  });
});
