import styled from "styled-components";

const StyledText = styled.p`
  transition: 0.5s;
  color: ${(props) => (props.theme.dark === true ? "white" : "black")};
`;

export default StyledText;
