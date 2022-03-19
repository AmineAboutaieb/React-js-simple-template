import React from "react";
import { Fragment } from "react";
import StyledButton from "../../styled-components/StyledButton";
import StyledContainerSecondary from "../../styled-components/StyledContainerSecondary";
import StyledText from "../../styled-components/StyledText";
import "./landingPage.css";

function LandingPage() {
  return (
    <Fragment>
      <StyledContainerSecondary className="landing-page">
        <StyledContainerSecondary className="banner">
          <h1 className="banner__title">
            <StyledText>Landing page banner</StyledText>
          </h1>
          <StyledText>This is the landing page</StyledText>
          <StyledContainerSecondary className="banner__btns">
            <StyledButton>
              <span>Discover</span>
            </StyledButton>
          </StyledContainerSecondary>
        </StyledContainerSecondary>
      </StyledContainerSecondary>
    </Fragment>
  );
}

export default LandingPage;
