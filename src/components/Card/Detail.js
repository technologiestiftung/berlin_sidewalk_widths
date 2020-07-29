import React from "react";
import styled from "styled-components";
import CardWrapper from "./CardWrapper";

const DetailCardWrapper = styled(CardWrapper)`
  display: block;
  flex-direction: column;
  padding-top: ${(props) => props.theme.padding[0]};
  padding-left: ${(props) => props.theme.padding[1]};
`;

const DetailHeader = styled.div`
  display: flex;
  width: 250px;
  flex-direction: row;
`;

// eslint-disable-next-line no-unused-vars
const DetailCard = (p) => {
  const { data } = p;
  return (
    <DetailCardWrapper>
      <DetailHeader>{JSON.stringify(data)}</DetailHeader>
    </DetailCardWrapper>
  );
};
