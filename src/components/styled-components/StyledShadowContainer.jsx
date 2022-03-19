import styled from "styled-components";
import COLORS from "../../colors";

const StyledShadowContainer = styled.div`
  z-index: 1;
  position: relative;
  box-shadow: 0px 0px 0.8px
    ${(props) =>
      props.theme.dark ? COLORS.light_primary : COLORS.dark_primary};
`;

export default StyledShadowContainer;
