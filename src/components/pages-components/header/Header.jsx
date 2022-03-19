import React from "react";
import "./header.css";
import StyledContainerSecondary from "../../styled-components/StyledContainerSecondary";
import StyledText from "../../styled-components/StyledText";
import { Link, NavLink } from "react-router-dom";
import StyledShadowContainer from "../../styled-components/StyledShadowContainer";

function Header() {
  return (
    <StyledShadowContainer>
      <StyledContainerSecondary className="header">
        <StyledContainerSecondary className="header__title">
          <img src={"/logo.png"} />
          <h2>
            <Link to={"/"}>
              <StyledText>Musify</StyledText>
            </Link>
          </h2>
        </StyledContainerSecondary>
        <ul className="header__links">
          <li>
            <NavLink to={"/register"}>
              <StyledText>Sign up</StyledText>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>
              <StyledText>Sign in</StyledText>
            </NavLink>
          </li>
        </ul>
      </StyledContainerSecondary>
    </StyledShadowContainer>
  );
}

export default Header;
