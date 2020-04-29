import React, { PureComponent } from "react";
import styled from "styled-components";

import TSBLogo from "components/TSBLogo";

const StyledLogoTile = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  display: flex;
  font-family: 'Clan Book';
  flex-direction: column;
  z-index: 1000;
  font-size: 12px;

  @media (max-width: 768px) {
    top: auto;
    bottom: 15px;
    left: 15px;
    max-width: 120px;
  }
`;

const StyledTSBLogo = styled(TSBLogo)`
  padding-left: 0px;
`;

class LogoTile extends PureComponent {
  render() {
    return (
      <StyledLogoTile>
        {/* Ein Projekt der: */}
        <StyledTSBLogo />
      </StyledLogoTile>
    );
  }
}

export default LogoTile;
