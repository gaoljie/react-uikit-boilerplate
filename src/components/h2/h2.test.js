import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import theme from "../theme";
import H2 from "./index";

describe("Test H2", () => {
  it("H2 Test", () => {
    const wrapper = mount(<H2>Primary</H2>);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper).toHaveStyleRule("color", "#333333");

    expect(wrapper).toHaveStyleRule("font-family", theme.primaryFont);

    expect(wrapper.children().text()).toEqual("Primary");

    expect(wrapper.exists("h2")).toEqual(true);
  });
});
