import React from "react";
import "jest-styled-components";
import { mount, shallow } from "enzyme";

import Input from "./index";

const props = {
  type: "email",
  name: "email",
  value: "aa@bb.com",
  width: "200px",
  placeholder: "Please Input Email"
};

describe("Test Input", () => {
  it("Matches the snapshot", () => {
    const wrapper = mount(<Input {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Render Prop", () => {
    const wrapper = shallow(<Input {...props} />);

    Object.keys(props).forEach(key => {
      expect(wrapper.props()[key]).toEqual(props[key]);
    });
  });

  it("Event Handler", () => {
    const wrapper = shallow(
      <Input
        {...props}
        onChange={e => wrapper.setProps({ value: e.target.value })}
      />
    );

    const newValue = "newValue";

    wrapper.simulate("change", {
      target: {
        value: "newValue"
      }
    });

    expect(wrapper.props().value).toEqual(newValue);
  });
});
