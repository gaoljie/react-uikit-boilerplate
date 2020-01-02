import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import theme from "../theme";
import H4 from "./index";

describe("Test H4", () => {
  it("H4 Test", () => {
    const wrapper = mount(<H4>Primary</H4>);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper).toHaveStyleRule("color", "#333333");

    expect(wrapper).toHaveStyleRule("font-family", theme.primaryFont);

    expect(wrapper.children().text()).toEqual("Primary");

    expect(wrapper.exists("h4")).toEqual(true);
  });
});
