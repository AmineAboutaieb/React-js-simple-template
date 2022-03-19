import styled from "styled-components";
import StyledText from "./StyledText";
import COLORS from "../../colors";
import { NavLink } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${(props) =>
    props.theme.dark ? COLORS.dark_primary : COLORS.light_primary};
  box-shadow: -0.5px 0px 0px 0px
    ${(props) =>
      props.theme.dark ? COLORS.light_primary : COLORS.dark_primary};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(102%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to="/">
        <StyledText>Home</StyledText>
      </NavLink>
      <NavLink to="/register">
        <StyledText>Register</StyledText>
      </NavLink>
      <NavLink to="/login">
        <StyledText>Login</StyledText>
      </NavLink>
    </StyledMenu>
  );
};

export default Menu;
