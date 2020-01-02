import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import theme from "../theme";
import H1 from "./index";

describe("Test H1", () => {
  it("H1 Test", () => {
    const wrapper = mount(<H1>Primary</H1>);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper).toHaveStyleRule("color", "#333333");

    expect(wrapper).toHaveStyleRule("font-family", theme.primaryFont);

    expect(wrapper.children().text()).toEqual("Primary");

    expect(wrapper.exists("h1")).toEqual(true);
  });
});
