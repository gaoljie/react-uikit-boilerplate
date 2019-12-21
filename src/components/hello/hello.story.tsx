import React from "react";
import { Hello } from "./index";

export default { title: "Hello", component: Hello };

export const Primary = () => (
  <div>
    <Hello text={"1"} />
  </div>
);
