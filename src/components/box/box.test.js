import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import theme from "../theme";
import Box from "./index";

const props = {
  as: "p",
  dp: "flex",
  fd: "column",
  bs: "border-box",
  width: "180px",
  height: "100px",
  fs: "18px",
  fw: "wrap",
  jc: "flex-start",
  ai: "flex-end",
  ji: "start",
  bg: "white",
  m: "10px",
  ta: "center",
  lh: "1",
  color: "black",
  p: "10px",
  ml: "20px",
  mr: "21px",
  mt: "22px",
  mb: "23px",
  pl: "24px",
  pr: "25px",
  pt: "26px",
  pb: "27px",
  children: <span>children</span>
};
describe("Test Box", () => {
  it("Matches the snapshot", () => {
    const wrapper = mount(<Box {...props}>content</Box>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Styling", () => {
    const wrapper = mount(<Box {...props} />);

    expect(wrapper.exists(props.as)).toEqual(true);

    expect(wrapper.props().children).toEqual(props.children);

    expect(wrapper).toHaveStyleRule("display", props.dp);
    expect(wrapper).toHaveStyleRule("color", props.color);
    expect(wrapper).toHaveStyleRule("font-size", props.fs);
    expect(wrapper).toHaveStyleRule("text-align", props.ta);
    expect(wrapper).toHaveStyleRule("flex-direction", props.fd);
    expect(wrapper).toHaveStyleRule("line-height", props.lh);
    expect(wrapper).toHaveStyleRule("box-sizing", props.bs);
    expect(wrapper).toHaveStyleRule("width", props.width);
    expect(wrapper).toHaveStyleRule("height", props.height);
    expect(wrapper).toHaveStyleRule("justify-content", props.jc);
    expect(wrapper).toHaveStyleRule("align-items", props.ai);
    expect(wrapper).toHaveStyleRule("justify-items", props.ji);
    expect(wrapper).toHaveStyleRule("background", props.bg);
    expect(wrapper).toHaveStyleRule("flex-wrap", props.fw);
    expect(wrapper).toHaveStyleRule("margin", props.m);
    expect(wrapper).toHaveStyleRule("padding", props.p);
    expect(wrapper).toHaveStyleRule("margin-left", props.ml);
    expect(wrapper).toHaveStyleRule("margin-right", props.mr);
    expect(wrapper).toHaveStyleRule("margin-top", props.mt);
    expect(wrapper).toHaveStyleRule("margin-bottom", props.mb);
    expect(wrapper).toHaveStyleRule("padding-left", props.pl);
    expect(wrapper).toHaveStyleRule("padding-right", props.pr);
    expect(wrapper).toHaveStyleRule("padding-top", props.pt);
    expect(wrapper).toHaveStyleRule("padding-bottom", props.pb);

    wrapper.setProps({
      height: {
        xl: "100px"
      }
    });

    expect(wrapper).toHaveStyleRule("height", `100px`);

    wrapper.setProps({
      height: {
        lg: "120px"
      }
    });

    expect(wrapper).toHaveStyleRule("height", `120px`, {
      media: theme.smallDesktop.slice(7)
    });

    wrapper.setProps({
      height: {
        md: "140px"
      }
    });

    expect(wrapper).toHaveStyleRule("height", `140px`, {
      media: theme.tablet.slice(7)
    });

    wrapper.setProps({
      height: {
        sm: "160px"
      }
    });

    expect(wrapper).toHaveStyleRule("height", `160px`, {
      media: theme.mobile.slice(7)
    });

    wrapper.setProps({ center: true });
    expect(wrapper).toHaveStyleRule("display", `grid`);
    expect(wrapper).toHaveStyleRule("place-items", `center`);

    wrapper.setProps({ vCenter: true });
    expect(wrapper).toHaveStyleRule("align-items", `center`);

    wrapper.setProps({ hCenter: true });
    expect(wrapper).toHaveStyleRule("justify-items", `center`);

    expect(wrapper).not.toHaveStyleRule("grid-column", `span 1`);

    wrapper.setProps({ xl: 4, lg: 3, md: 2, sm: 2 });

    expect(wrapper).toHaveStyleRule("grid-column", `span 4`);

    expect(wrapper).toHaveStyleRule("grid-column", `span 3`, {
      media: theme.smallDesktop.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-column", `span 2`, {
      media: theme.tablet.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-column", `span 2`, {
      media: theme.mobile.slice(7)
    });

    wrapper.setProps({ start: 2 });

    expect(wrapper).toHaveStyleRule("grid-column", `2 / span 4`);

    expect(wrapper).toHaveStyleRule("grid-column", `2 / span 3`, {
      media: theme.smallDesktop.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-column", `2 / span 2`, {
      media: theme.tablet.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-column", `2 / span 2`, {
      media: theme.mobile.slice(7)
    });

    wrapper.setProps({
      start: {
        xl: 3
      }
    });

    expect(wrapper).toHaveStyleRule("grid-column", `3 / span 4`);

    expect(wrapper).toHaveStyleRule("grid-column", `3 / span 3`, {
      media: theme.smallDesktop.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-column", `3 / span 2`, {
      media: theme.tablet.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-column", `3 / span 2`, {
      media: theme.mobile.slice(7)
    });

    wrapper.setProps({
      start: {
        lg: 4
      }
    });

    expect(wrapper).toHaveStyleRule("grid-column", `4 / span 3`, {
      media: theme.smallDesktop.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-column", `4 / span 2`, {
      media: theme.tablet.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-column", `4 / span 2`, {
      media: theme.mobile.slice(7)
    });

    wrapper.setProps({
      start: {
        md: 5
      }
    });

    expect(wrapper).toHaveStyleRule("grid-column", `5 / span 2`, {
      media: theme.tablet.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-column", `5 / span 2`, {
      media: theme.mobile.slice(7)
    });

    wrapper.setProps({
      start: {
        sm: 6
      }
    });

    expect(wrapper).toHaveStyleRule("grid-column", `6 / span 2`, {
      media: theme.mobile.slice(7)
    });
  });
});
