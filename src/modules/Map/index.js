import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import styled from "styled-components";
import { withRouter, Route } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

import MarkerLayer from "./Layer/MarkerLayer";
import Tooltip from "components/Tooltip";
import LogoTile from "./LogoTile";

import c from "config";

const mapConfig = c.map.config;

const MapGL = ReactMapboxGl({ ...mapConfig });

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
  flex: 1;
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
  opacity: 1;
`;

const Map = (p) => {
  const { mapCenter, mapZoom, style, data } = p;
  const setTooltipData = useStoreActions((actions) => actions.setTooltipData);
  const setTooltipPos = useStoreActions((actions) => actions.setTooltipPos);

  const handleMouseMove = (map,evt) => {
    const features = map.queryRenderedFeatures(evt.point);
    if (features[0] && features[0].properties.width) {
      setTooltipData(features[0].properties);
      setTooltipPos([evt.lngLat.lng, evt.lngLat.lat]);
    } else {
      setTooltipData(null);
    }
  }

  return (
    <MapWrapper>
      <MapGL
        zoom={mapZoom}
        center={mapCenter}
        style={style}
        onMouseMove={handleMouseMove}
        containerStyle={{ height: "100%", width: "100%" }}
      >
        {/* <Route
          path={["/", "/suche", "/liste", "/favoriten", "/info"]}
          render={() => <MarkerLayer data={data}/>}
        /> */}
        <Tooltip />
        <LogoTile />
      </MapGL>
    </MapWrapper>
  );
};

export default withRouter(Map);
