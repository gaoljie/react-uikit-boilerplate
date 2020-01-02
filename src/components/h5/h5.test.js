import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import theme from "../theme";
import H5 from "./index";

describe("Test H5", () => {
  it("H5 Test", () => {
    const wrapper = mount(<H5>Primary</H5>);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper).toHaveStyleRule("color", "#333333");

    expect(wrapper).toHaveStyleRule("font-family", theme.secondaryFont);

    expect(wrapper.children().text()).toEqual("Primary");

    expect(wrapper.exists("h5")).toEqual(true);
  });
});
