import React from "react";
import Tabs from "./index";
import Tab from "../tab";
import Image from "../image";

export default { title: "Tabs", component: Tabs };
const list = [
  {
    src: "_OneOffPurchase/nytone.svg",
    alt: "The New York Times",
    content: '"Make room, Gerber Babies, for the Goo-Goo Gourmets."'
  },
  {
    src: "_HomePageRefresh/FoodNWine.svg",
    alt: "Food & Wine",
    content:
      '"Admit it: If you order these meals, your baby will eat more adventurously than you do."'
  },
  {
    src: "_OneOffPurchase/goopone.svg",
    alt: "goop",
    content:
      '"Yumi, an adorable new pediatrician/nutritionist-approved baby-food delivery company, makes the whole experience a pleasure."'
  },
  {
    src: "_HomePageRefresh/CNN.svg",
    alt: "CNN",
    content: (
      <a href="https://money.cnn.com/video/technology/2018/02/06/yumi-subscription-delivery-baby-food.cnnmoney/index.html">
        See the CNN video here.
      </a>
    )
  },
  {
    src: "_HomePageRefresh/Inc.svg",
    alt: "Inc",
    content: (
      <a href="https://www.inc.com/video/2-female-founders-share-the-importance-of-building-a-brand-not-just-a-product.html">
        See the Inc. video here.
      </a>
    )
  }
];

const onTabClick = index => {
  console.log(index);
};
export const Primary = () => (
  <>
    <Tabs gap="10px" onTabClick={onTabClick}>
      {list.map(items => (
        <Tab key={items.src} title={<Image height="20px" {...items} />}>
          {items.content}
        </Tab>
      ))}
    </Tabs>
  </>
);
