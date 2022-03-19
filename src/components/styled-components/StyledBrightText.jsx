import styled from "styled-components";
import COLORS from "../../colors";

const StyledBrightText = styled.p`
  transition: 0.5s;
  text-align: center;
  font-size: 1.5em;
  margin: 15px 0 0 0;
  color: ${(props) =>
    props.theme.dark === true ? COLORS.light_primary : COLORS.bright_color};
`;

export default StyledBrightText;
