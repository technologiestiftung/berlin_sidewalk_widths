import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import RoundButton from "components/RoundButton";

const StyledLink = styled(Link)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

class SidebarClose extends PureComponent {
  render() {
    return (
      <StyledLink to={{ pathname: "/", search: this.props.location.search }}>
        <RoundButton aria-label="Leiste schließen" title="Leiste schließen">
          <CloseIcon />
        </RoundButton>
      </StyledLink>
    );
  }
}

export default withRouter(SidebarClose);
