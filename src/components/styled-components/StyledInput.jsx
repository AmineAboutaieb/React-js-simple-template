import styled from "styled-components";
import COLORS from "../../colors";

const StyledFormInput = styled.input`
  transition: 0.5s;
  border-radius: 2px;
  padding: 5px 10px;
  font-size: 1em;
  border: 1px solid
    ${(props) => (props.theme.dark ? "transparent" : COLORS.bright_color)};
  color: ${(props) =>
    props.theme.dark ? COLORS.light_primary : COLORS.bright_color};
  outline-color: ${(props) =>
    props.theme.dark ? "transparent" : COLORS.bright_color};
  background-color: ${(props) =>
    props.theme.dark ? COLORS.dark_secondary : "transparent"};
`;

export default StyledFormInput;
