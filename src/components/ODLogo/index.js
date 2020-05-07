import React from "react";
import styled from "styled-components";
import ODLogoSrc from "assets/images/odis-logo.svg"; // eslint-disable-line

const ODLogo = styled.a.attrs({
  href: "https://odis-berlin.de",
  target: "_blank",
})`
  padding-top: 10px;

  img {
    width: 150px;
  }
`;

export default () => (
  <ODLogo>
    <img src={ODLogoSrc} alt="OD Logo" />
  </ODLogo>
);