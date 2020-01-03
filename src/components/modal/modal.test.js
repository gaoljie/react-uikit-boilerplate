import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";

import styled from "styled-components";
import Modal from "./index";

const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: yellow;
`;

const Container2 = styled.div`
  width: 400px;
  height: 400px;
  background: yellow;
`;

const ContainerWithoutBg = styled.div`
  width: 400px;
  height: 400px;
`;

describe("Test Input", () => {
  window.scrollTo = jest.fn();

  it("Matches the snapshot", () => {
    const wrapper = mount(
      <Modal visible>
        <Container>Container</Container>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Render Prop", () => {
    const wrapper = mount(
      <Modal>
        <Container>Text</Container>
      </Modal>
    );

    expect(wrapper).toHaveStyleRule("display", "none");
    expect(wrapper.find(Container)).toHaveStyleRule(
      "background-color",
      "yellow"
    );

    wrapper.setProps({ visible: true });

    expect(wrapper).not.toHaveStyleRule("display");
    expect(wrapper.text()).toEqual("Text");

    const evt = { stopPropagation: jest.fn() };

    wrapper.find(Container).simulate("click", evt);
    expect(evt.stopPropagation).toHaveBeenCalledTimes(1);
  });

  it("Styling", () => {
    const wrapper = mount(
      <Modal visible={false}>
        <ContainerWithoutBg>Text</ContainerWithoutBg>
      </Modal>
    );

    expect(wrapper.find(ContainerWithoutBg)).toHaveStyleRule(
      "background-color",
      "white"
    );
  });

  it("Styling2", () => {
    const wrapper = mount(
      <Modal visible={false}>
        <Container2>Text</Container2>
      </Modal>
    );

    expect(wrapper.find(Container2)).toHaveStyleRule("background", "yellow");
  });
});
