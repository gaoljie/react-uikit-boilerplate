import styled from "styled-components";
import Box from "../box";
import theme from "../theme";

export interface LineProps {
  height?: string;
  color?: string;
}
const Line = styled(Box)<LineProps>`
  background-color: ${props => props.color || theme.primary};
  height: ${props => props.height || "2px"};
`;

export default Line;
