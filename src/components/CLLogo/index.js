import React from "react";
import styled from "styled-components";
import CLLogoSrc from "assets/images/citylab-logo.svg"; // eslint-disable-line

const CLLogo = styled.a.attrs({
  href: "https://www.citylab-berlin.org",
  target: "_blank",
})`
  padding-top: 10px;

  img {
    width: 150px;
  }
`;

export default () => (
  <CLLogo>
    <img src={CLLogoSrc} alt="TSB Logo" />
  </CLLogo>
);
