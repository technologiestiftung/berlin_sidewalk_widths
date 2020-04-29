import React, { Fragment } from "react";
import { Layer, Feature } from "react-mapbox-gl";
import { useStoreActions, useStoreState } from "easy-peasy";
import idx from 'idx';
import c from 'config';

import history from '../../../history';

const paintPropsDefault = {
  //'opacity' : 100,
  'line-width': 2,

  'line-color': [
    
    "case",
    [
      "<=",
      ["get", "width2"],
      1.5
    ],
    "hsl(0, 85%, 50%)",
    ["<=", ["get", "width2"], 3],
    "hsl(29, 78%, 56%)",
    [
      "<",
      ["get", "width2"],
      4.5
    ],
    "hsl(52, 73%, 56%)",
    ["<=", ["get", "width2"], 6],
    "hsl(72, 63%, 50%)",
    "hsl(121, 70%, 35%)"
  ]

};

const MarkerLayer = (p) => {
  const { data } = p;
  const setTooltipPos = useStoreActions((actions) => actions.setTooltipPos);
  const setTooltipData = useStoreActions((actions) => actions.setTooltipData);
  const setHighlightData = useStoreActions(a => a.setHighlightData);
  const highlightData = useStoreState(a => a.highlightData);
  const paintProps = getPaintProps(highlightData);
  const legendType = c.about.legend.id;

  const handleMouseEnter = (evt, { properties = {} }) => {
    evt.map.getCanvas().style.cursor = "pointer";
    console.log("marker layer properties", properties)
    setTooltipData(properties);
  };

  function getPaintProps(highlightData) {
    const itemId = idx(highlightData, _ => _.properties.autoid) || '';
    const activeExpr = ['case', ['==', ['string', ['get', 'autoid']], itemId], 12, 6] || '';
    const markerColors = c.map.marker.color;

    return {
      'line-width': 2,
      'line-color': [
          
          "case",
          [
            "<=",
            ["get", "width2"],
            1.5
          ],
          "hsl(0, 85%, 50%)",
          ["<=", ["get", "width2"], 3],
          "hsl(29, 78%, 56%)",
          [
            "<",
            ["get", "width2"],
            4.5
          ],
          "hsl(52, 73%, 56%)",
          ["<=", ["get", "width2"], 6],
          "hsl(72, 63%, 50%)",
          "hsl(121, 70%, 35%)"
        ],
    };
  };

  const handleMouseLeave = (evt) => {
    evt.map.getCanvas().style.cursor = "";
    setTooltipData(null);
  };

  const handleClick = (evt, data) => {
    evt.originalEvent.preventDefault();
    evt.originalEvent.stopPropagation();

    setHighlightData(data);

    const nextLocation = `/liste/${data.properties.autoid}`;
    history.push(nextLocation);
  };

  const renderFeat = (feat, i) => {
    const feature = (
      <Feature
        coordinates={feat.geometry.coordinates}
        key={`feat-${i}`}
        onMouseEnter={(evt) => handleMouseEnter(evt, feat)}
        onMouseLeave={(evt) => handleMouseLeave(evt)}
        //onClick={(evt) => handleClick(evt, feat)}
        properties={feat.properties}
      />
    );
    return feature;
  };

  const handleMouseMove = (evt) => {
    setTooltipPos([evt.lngLat.lng, evt.lngLat.lat]);
  };

  return (
    <Fragment>
      <Layer
        id="MarkerLayer"
        type="line"
        paint={paintProps}
        onMouseMove={(evt) => handleMouseMove(evt)}
      >
        {/* { data.features.map((feat, i) => renderFeat(feat, i)) } */}
        {data.features.filter(d => !d.properties.filtered).map(feat => renderFeat(feat))}
      </Layer>
    </Fragment>
  );
};

export default MarkerLayer;
