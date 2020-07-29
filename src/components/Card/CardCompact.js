import React from "react";
import styled from "styled-components";
import { useStoreActions } from "easy-peasy";
import history from "../../history";

import CardWrapper from "./CardWrapper";
import CardHeader from "./CardHeader";
import Toggle from "components/Toggle";

const StyledCardWrapper = styled(CardWrapper)`
  margin-bottom: 10px;
  padding: 5px;
  padding-bottom: 10px;
  padding-left: 0px;
  cursor: pointer;
  border-width: 1px solid;
  border-bottom: grey;
  border-radius: 0;
  will-change: border-color, transform;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: black;
    transform: translateX(5px);
  }
`;

const CardCompact = (p) => {
  const { data, type } = p;
  const { properties } = data;
  const { autoid, isFaved } = properties;
  const setHighlightData = useStoreActions((a) => a.setHighlightData);
  const setFav = useStoreActions((a) => a.setFav);
  const isTooltip = type === "white";

  const handleClick = (evt, data) => {
    console.log("click");
    const { properties } = data;
    const nextLocation = `/liste/${properties.autoid}`;
    setHighlightData(data);
    history.push(nextLocation);
  };

  return (
    <StyledCardWrapper>
      {!isTooltip && (
        <Toggle
          isFaved={isFaved}
          autoId={autoid}
          onToggle={setFav}
          type="list"
        />
      )}
      <div onClick={(evt) => handleClick(evt, data)}>
        <CardHeader hasBorder={true} data={properties} />
      </div>
    </StyledCardWrapper>
  );
};

export default CardCompact;
