import styled from "styled-components";
import COLORS from "../../colors";

const StyledButton = styled.button`
  transition: 0.5s;
  padding: 1em 2em;
  /* border-radius: 1em; */
  font-weight: bolder;
  cursor: pointer;
  border: 1px solid
    ${(props) =>
      props.theme.dark === true ? COLORS.light_primary : COLORS.bright_color};
  background-color: ${(props) =>
    props.theme.dark === true ? COLORS.bright_color : COLORS.light_primary};
  color: ${(props) =>
    props.theme.dark === true ? COLORS.light_primary : COLORS.bright_color};
  &:hover {
    border: 1px solid
      ${(props) =>
        props.theme.dark === true ? COLORS.bright_color : COLORS.bright_color};
    background-color: ${(props) =>
      props.theme.dark === true ? COLORS.light_primary : COLORS.bright_color};
    color: ${(props) =>
      props.theme.dark === true ? COLORS.bright_color : COLORS.light_primary};
  }
`;

export default StyledButton;
