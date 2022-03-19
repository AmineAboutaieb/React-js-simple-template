import styled from "styled-components";
import COLORS from "../../colors";

const StyledContainerSecondary = styled.div`
  transition: 0.5s;
  background-color: ${(props) =>
    props.theme.dark ? COLORS.dark_primary : COLORS.light_primary};
  position: relative;
`;

export default StyledContainerSecondary;
