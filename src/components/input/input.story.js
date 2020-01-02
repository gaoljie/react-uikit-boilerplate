import React from "react";
import Input from "./index";

export default { title: "Input", component: Input };

export const Primary = () => <Input />;
export const Width = () => <Input width="300px" />;
export const Placeholder = () => <Input placeholder="Input Email" />;
