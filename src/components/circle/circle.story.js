import React from "react";
import Circle from "./index";

export default { title: "Circle", component: Circle };

export const Primary = () => (
  <div>
    <Circle mr="20px" width="20px" color="black" />
    <Circle mr="20px" width="20px" half color="black" />
    <Circle mr="20px" width="20px" color="black" />
  </div>
);
