import React from "react";
import { Box } from "rebass/styled-components";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "theme-ui";
import GlobalStyle from "styles/GlobalStyle";
import { withRouter, Route } from "react-router-dom";
import Theme from "styles/Theme";
import { useStoreState } from "easy-peasy";

import Map from "modules/Map";
import Sidebar from "modules/Sidebar";
import Nav from "components/Nav";
import LoadingOverlay from "components/LoadingOverlay";

const DynamicGlobalStyle = createGlobalStyle``;

const StyledWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  transition: all 0.25s ease-in-out;
`;

const AppWrapper = () => {
  const isLoading = useStoreState((state) => state.isLoading);
  const data = useStoreState((state) => state.data);
  const filteredData = useStoreState((state) => state.filteredData);
  const mapCenter = useStoreState((state) => state.mapCenter);
  const mapZoom = useStoreState((state) => state.mapZoom);
  const style = process.env.REACT_APP_MAP_STYLE;

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <DynamicGlobalStyle />
      <StyledWrapper>
        <LoadingOverlay loading={isLoading} />
        <Route
          path={["/liste/:itemId", "/liste", "/", "/info"]}
          render={() => <Sidebar data={filteredData} />}
        />
        <Nav />
        {filteredData && (
          <Map
            data={filteredData}
            mapCenter={mapCenter}
            mapZoom={mapZoom}
            style={style}
          />
        )}
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default withRouter(AppWrapper);
