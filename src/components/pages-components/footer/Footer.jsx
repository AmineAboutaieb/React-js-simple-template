import React from "react";
import StyledContainerSecondary from "../../styled-components/StyledContainerSecondary";
import StyledShadowContainer from "../../styled-components/StyledShadowContainer";
import StyledText from "../../styled-components/StyledText";
import "./footer.css";

function Footer() {
  return (
    <StyledShadowContainer>
      <StyledContainerSecondary className="footer">
        <StyledText>
          <span>footer</span> &copy; copyright 2022
        </StyledText>
      </StyledContainerSecondary>
    </StyledShadowContainer>
  );
}

export default Footer;
