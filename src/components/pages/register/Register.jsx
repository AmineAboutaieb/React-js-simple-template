import React from "react";
import StyledContainerSecondary from "../../styled-components/StyledContainerSecondary";
import StyledButton from "../../styled-components/StyledButton";
import StyledShadowContainer from "../../styled-components/StyledShadowContainer";
import "./register.css";
import StyledFormInput from "../../styled-components/StyledInput";
import StyledBrightText from "../../styled-components/StyledBrightText";

function Register() {
  return (
    <StyledContainerSecondary className="register">
      <StyledShadowContainer className="register-form__container">
        <StyledBrightText className="form-title">Sign up</StyledBrightText>
        <form className="register-form">
          <StyledFormInput placeholder="Name..." type="text" />
          <StyledFormInput placeholder="Email..." type="email" />
          <StyledFormInput placeholder="Password..." type="password" />
          <StyledButton>Register</StyledButton>
        </form>
      </StyledShadowContainer>
    </StyledContainerSecondary>
  );
}

export default Register;
