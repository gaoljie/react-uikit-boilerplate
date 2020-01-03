import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import Tabs from "./index";
import Tab from "../tab";
import Image from "../image";

const list = [
  {
    src: "_OneOffPurchase/nytone.svg",
    clickable: true,
    alt: "The New York Times",
    content: '"Make room, Gerber Babies, for the Goo-Goo Gourmets."'
  },
  {
    src: "_HomePageRefresh/FoodNWine.svg",
    clickable: true,
    alt: "Food & Wine",
    content:
      '"Admit it: If you order these meals, your baby will eat more adventurously than you do."'
  },
  {
    src: "_OneOffPurchase/goopone.svg",
    clickable: true,
    alt: "goop",
    content:
      '"Yumi, an adorable new pediatrician/nutritionist-approved baby-food delivery company, makes the whole experience a pleasure."'
  },
  {
    src: "_HomePageRefresh/CNN.svg",
    clickable: false,
    alt: "CNN",
    content: (
      <a href="https://money.cnn.com/video/technology/2018/02/06/yumi-subscription-delivery-baby-food.cnnmoney/index.html">
        See the CNN video here.
      </a>
    )
  },
  {
    src: "_HomePageRefresh/Inc.svg",
    clickable: true,
    alt: "Inc",
    content: (
      <a href="https://www.inc.com/video/2-female-founders-share-the-importance-of-building-a-brand-not-just-a-product.html">
        See the Inc. video here.
      </a>
    )
  }
];

describe("Test Tab", () => {
  it("Matches the snapshot", () => {
    const wrapper = mount(
      <Tabs gap="10px">
        {list.map(props => (
          <Tab key={props.src} title={<Image height="20px" {...props} />}>
            {props.content}
          </Tab>
        ))}
      </Tabs>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("no valid children", () => {
    mount(
      <Tabs gap="10px" selectedIndex={1}>
        4
      </Tabs>
    );
  });

  it("Tab Array Snapshot", () => {
    const wrapper = mount(
      <Tabs>
        <Tab title="normal">
          <p>1</p>
        </Tab>

        <Tab title="two childrens">
          <p>1</p>
          <p>2</p>
        </Tab>
      </Tabs>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("Styling", () => {
    const wrapper = mount(
      <Tabs gap="10px">
        {list.map(props => (
          <Tab key={props.src} title={<Image height="20px" {...props} />}>
            {props.content}
          </Tab>
        ))}
      </Tabs>
    );
    expect(wrapper.find("nav")).toHaveStyleRule("grid-column-gap", "10px");
  });

  it("Event Handler", () => {
    const mockFunction = jest.fn();
    const wrapper = mount(
      <Tabs gap="10px">
        {list.map(props => (
          <Tab
            key={props.src}
            clickable={props.clickable}
            title={<Image height="20px" {...props} />}
          >
            {props.content}
          </Tab>
        ))}
      </Tabs>
    );

    expect(mockFunction).not.toHaveBeenCalled();

    expect(wrapper.childAt(1).prop("hidden")).toBe(false);
    expect(wrapper.childAt(2).prop("hidden")).toBe(true);

    expect(wrapper.find(Tab).length).toBe(list.length);
    expect(
      wrapper
        .find(Tab)
        .at(0)
        .props().selected
    ).toBe(true);
    expect(
      wrapper
        .find(Tab)
        .slice(1, list.length)
        .map(item => !item.props().selected)
        .every(item => item)
    ).toBe(true);

    wrapper
      .find(Tab)
      .at(list.length - 2)
      .simulate("click");

    expect(
      wrapper
        .find(Tab)
        .at(list.length - 2)
        .props().selected
    ).toBe(false);

    wrapper
      .find(Tab)
      .at(list.length - 1)
      .simulate("click");

    expect(
      wrapper
        .find(Tab)
        .at(list.length - 1)
        .props().selected
    ).toBe(true);

    expect(
      wrapper
        .find(Tab)
        .slice(0, list.length - 1)
        .map(item => !item.props().selected)
        .every(item => item)
    ).toBe(true);

    wrapper.setProps({ onTabClick: mockFunction });

    expect(mockFunction).not.toHaveBeenCalled();

    wrapper
      .find(Tab)
      .at(list.length - 3)
      .simulate("click");

    expect(wrapper.childAt(1).prop("hidden")).toBe(true);
    expect(wrapper.childAt(list.length - 2).prop("hidden")).toBe(false);

    expect(mockFunction).toHaveBeenCalledWith(list.length - 3);
  });
});
