import React from "react";
import "jest-styled-components";
import { shallow, mount } from "enzyme";

import Image from "./index";

const prop = {
  src: "url.com",
  w: 180,
  h: 110,
  of: "cover",
  width: "200px",
  height: "200px",
  alt: "image"
};

describe("Test Image", () => {
  it("Matches the snapshot", () => {
    const wrapper = shallow(<Image {...prop} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Render Prop", () => {
    const wrapper = mount(<Image {...prop} lazyLoad={false} />);
    const img = wrapper.find("img");
    expect(img.props().src.includes(`w_${prop.w}`)).toBe(true);
    expect(img.props().src.includes(`h_${prop.h}`)).toBe(true);
    expect(img.props().src.includes(`c_`)).toBe(false);

    wrapper.setProps({ w: null, h: 120, mode: "crop" });
    expect(
      wrapper
        .find("img")
        .props()
        .src.includes(`w_`)
    ).toBe(false);
    expect(
      wrapper
        .find("img")
        .props()
        .src.includes(`h_120`)
    ).toBe(true);

    expect(
      wrapper
        .find("img")
        .props()
        .src.includes(`c_crop`)
    ).toBe(true);

    wrapper.setProps({ w: 120, h: null });
    expect(
      wrapper
        .find("img")
        .props()
        .src.includes(`w_120`)
    ).toBe(true);
    expect(
      wrapper
        .find("img")
        .props()
        .src.includes(`h_`)
    ).toBe(false);
    expect(wrapper.find("img").props().alt).toEqual(prop.alt);

    wrapper.setProps({
      w: null,
      h: null,
      src: "aa.gif",
      xl: 1,
      lg: null,
      md: null,
      sm: null
    });
    expect(
      wrapper
        .find("img")
        .props()
        .src.includes(`w_`)
    ).toBe(false);
    expect(
      wrapper
        .find("img")
        .props()
        .src.includes(`h_`)
    ).toBe(false);

    expect(
      wrapper
        .find("img")
        .props()
        .src.includes(`fl_lossy/`)
    ).toBe(true);

    expect(wrapper).toHaveStyleRule("object-fit", prop.of);

    expect(wrapper).toHaveStyleRule("width", "100%");

    wrapper.setProps({ xl: null, lg: 1, md: null, sm: null });

    expect(wrapper).toHaveStyleRule("width", "100%");

    wrapper.setProps({ xl: null, lg: null, md: 1, sm: null });

    expect(wrapper).toHaveStyleRule("width", "100%");

    wrapper.setProps({ xl: null, lg: null, md: null, sm: 1 });

    expect(wrapper).toHaveStyleRule("width", "100%");

    wrapper.setProps({ overflow: true, offset: 300, lazyload: true });
  });
});
