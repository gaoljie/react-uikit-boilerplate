import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";

import Icon from "./index";

const props = {
  name: "star",
  width: "2px"
};

describe("Test Circle", () => {
  it("Matches the snapshot", () => {
    const wrapper = mount(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
