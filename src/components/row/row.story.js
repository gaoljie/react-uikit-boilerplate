import React from "react";
import Row from "./index";
import Box from "../box";
import Image from "../image";

export default { title: "Row", component: Row };

export const Primary = () => (
  <Row>
    <Box span={3} md={2} start={2}>
      1
    </Box>
    <Image span={2} md={3} src="_OneOffPurchase/Nutrients_StopMotion.gif" />
  </Row>
);

export const Secondary = () => (
  <Row>
    <Box span={3} md={2} start={{ span: 2, md: 4 }}>
      1
    </Box>
    <Image span={2} md={3} src="_OneOffPurchase/Nutrients_StopMotion.gif" />
  </Row>
);
