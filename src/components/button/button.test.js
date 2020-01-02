import React from "react";
import "jest-styled-components";
import { shallow, mount } from "enzyme";
import Button from "./index";
import theme from "../theme";

describe("Test Button", () => {
  it("Matches the snapshot", () => {
    const wrapper = mount(<Button>button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Styling", () => {
    const wrapper = mount(<Button>button</Button>);

    expect(wrapper.find("button")).toHaveStyleRule(
      "background-color",
      theme.primary
    );
  });

  it("Render Prop", () => {
    const btnText = "Hello world";
    const wrapper = shallow(<Button>{btnText}</Button>);

    expect(wrapper.text()).toEqual(btnText);
  });

  it("Event Handler", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Button onClick={mockFunction}>Button</Button>);

    expect(mockFunction).not.toHaveBeenCalled();

    wrapper.simulate("click");

    expect(mockFunction).toHaveBeenCalled();
  });

  it("Disabled", () => {
    const mockFunction = jest.fn();
    const wrapper = mount(
      <Button onClick={mockFunction} disabled>
        Button
      </Button>
    );

    expect(mockFunction).not.toHaveBeenCalled();

    wrapper.simulate("click");

    expect(mockFunction).not.toHaveBeenCalled();
  });
});
