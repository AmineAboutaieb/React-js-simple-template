import React from "react";
import StyledContainerSecondary from "../../styled-components/StyledContainerSecondary";
import StyledButton from "../../styled-components/StyledButton";
import StyledShadowContainer from "../../styled-components/StyledShadowContainer";
import "./login.css";
import StyledFormInput from "../../styled-components/StyledInput";
import StyledBrightText from "../../styled-components/StyledBrightText";

function Login() {
  return (
    <StyledContainerSecondary className="login">
      <StyledShadowContainer className="login-form__container">
        <StyledBrightText className="form-title">Sign in</StyledBrightText>
        <form className="login-form">
          <StyledFormInput placeholder="Email..." type="email" />
          <StyledFormInput placeholder="Password..." type="password" />
          <StyledButton>login</StyledButton>
        </form>
      </StyledShadowContainer>
    </StyledContainerSecondary>
  );
}

export default Login;
