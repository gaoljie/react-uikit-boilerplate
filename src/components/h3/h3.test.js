import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import theme from "../theme";
import H3 from "./index";

describe("Test H3", () => {
  it("H3 Test", () => {
    const wrapper = mount(<H3>Primary</H3>);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper).toHaveStyleRule("color", "#333333");

    expect(wrapper).toHaveStyleRule("font-family", theme.primaryFont);

    expect(wrapper.children().text()).toEqual("Primary");

    expect(wrapper.exists("h3")).toEqual(true);
  });
});
