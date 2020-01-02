import React from "react";
import Box from "./index";

export default { title: "Box", component: Box };

export const WidthHeight = () => (
  <>
    Width and Height: width, height
    <br />
    backgroud: bg
    <br />
    font size: fs
    <Box bg="yellow" width="100px" height="200px" fs="18px" color="red">
      font size: 18px
    </Box>
  </>
);

export const Center = () => (
  <>
    <Box center height="200px" bg="yellow">
      <span>text</span>
    </Box>
    <Box vCenter height="200px">
      <span>text</span>
    </Box>
    <Box hCenter height="200px" bg="green">
      <span>text</span>
    </Box>
  </>
);

export const Padding = () => (
  <>
    padding: p
    <Box bg="red" p="10px">
      <Box bg="blue" height="100px" />
    </Box>
    <br />
    <br />
    <br />
    padding left: pl
    <Box bg="red" pl="10px">
      <Box bg="blue" height="100px" />
    </Box>
    <br />
    <br />
    <br />
    padding right: pr
    <Box bg="red" pr="10px">
      <Box bg="blue" height="100px" />
    </Box>
    <br />
    <br />
    <br />
    padding top: pt
    <Box bg="red" pt="10px">
      <Box bg="blue" height="100px" />
    </Box>
    <br />
    <br />
    <br />
    padding bottom: pb
    <Box bg="red" pb="10px">
      <Box bg="blue" height="100px" />
    </Box>
  </>
);

export const Margin = () => (
  <>
    margin: m
    <Box bg="green">
      <Box bg="red" height="100px" />
      <Box bg="blue" height="100px" m="10px" />
      <Box bg="yellow" height="100px" />
    </Box>
    <br />
    <br />
    <br />
    margin left: ml
    <Box bg="red">
      <Box bg="blue" height="100px" ml="10px" />
    </Box>
    <br />
    <br />
    <br />
    margin right: mr
    <Box bg="red">
      <Box bg="blue" height="100px" mr="10px" />
    </Box>
    <br />
    <br />
    <br />
    margin top: mt
    <Box bg="red" height="100px" />
    <Box bg="blue" height="100px" mt="10px" />
    <br />
    <br />
    <br />
    margin bottom: mb
    <Box bg="red" height="100px" mb="10px" />
    <Box bg="blue" height="100px" />
  </>
);

export const Flex = () => (
  <Box dp="flex" jc="start">
    <p>11</p>
    <p>22</p>
    <p>33</p>
    <p>44</p>
    <p>55</p>
  </Box>
);
