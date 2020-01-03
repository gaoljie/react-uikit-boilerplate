import styled from "styled-components";
import theme from "../theme";
import Box from "../box";

const Row = styled(Box)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  padding-left: calc((100vw - 1920px) / 2 + 120px);
  padding-right: calc((100vw - 1920px) / 2 + 120px);

  ${theme.desktop} {
    padding-left: 120px;
    padding-right: 120px;
  }
  ${theme.smallDesktop} {
    padding-left: 80px;
    padding-right: 80px;
  }

  ${theme.tablet} {
    padding-left: 40px;
    padding-right: 40px;
    grid-template-columns: repeat(6, 1fr);
  }

  ${theme.mobile} {
    padding-left: 20px;
    padding-right: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Row;
