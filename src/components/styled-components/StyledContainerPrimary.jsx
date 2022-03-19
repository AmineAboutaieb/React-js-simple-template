import styled from "styled-components";
import COLORS from "../../colors";

const StyledContainerPrimary = styled.div`
  transition: 0.5s;
  background-color: ${(props) =>
    props.theme.dark ? COLORS.dark_secondary : COLORS.light_primary};
`;

export default StyledContainerPrimary;
