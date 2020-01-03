import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import theme from "../theme";
import Row from "./index";

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
  span: 4,
  lg: 3,
  md: 2,
  sm: 1,
  start: 2,
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
describe("Test Row", () => {
  it("Matches the snapshot", () => {
    const wrapper = mount(
      <Row>
        <div>content</div>
      </Row>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Styling", () => {
    const wrapper = mount(<Row {...props} />);

    expect(wrapper).toHaveStyleRule("grid-template-columns", "repeat(12,1fr)");

    expect(wrapper).toHaveStyleRule("grid-template-columns", `repeat(6,1fr)`, {
      media: theme.tablet.slice(7)
    });
    expect(wrapper).toHaveStyleRule("grid-template-columns", `repeat(2,1fr)`, {
      media: theme.mobile.slice(7)
    });
  });
});
