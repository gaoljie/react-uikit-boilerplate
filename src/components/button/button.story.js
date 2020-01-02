import React from "react";
import Button from "./index";

export default { title: "Button", component: Button };

export const Primary = () => (
  <>
    <Button mr="20px" type="div">
      Primary
    </Button>
    <Button>Second</Button>
  </>
);

export const Disabled = () => (
  <>
    <Button disabled>Primary</Button>
  </>
);
