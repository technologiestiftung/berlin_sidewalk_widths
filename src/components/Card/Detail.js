import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "unistore/react";

const DetailTitle = styled(SidebarTitle)`
  margin-bottom: ${(props) => props.theme.padding[1]};
  padding-right: ${(props) => props.theme.padding[0]};
  padding-left: 0;
`;

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

const DetailCard = (p) => {
  const { data } = p;
  return (
    <DetailCardWrapper>
      <DetailHeader>{JSON.stringify(data)}</DetailHeader>
    </DetailCardWrapper>
  );
};
