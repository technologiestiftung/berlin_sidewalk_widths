import React from "react";
import { useStoreActions } from "easy-peasy";

import c from "config";

import SidebarTitle from "../SidebarTitle";
import CardCompact from "components/Card/CardCompact";
import CardParagraph from "components/Card/CardParagraph";
import Legend from 'components/Legend';

const SidebarInfo = (p) => {
  const data = c.about;
  const { title, paragraphs } = data;
  return (
    <>
      <SidebarTitle>
        {title}
      </SidebarTitle>
      <Legend/>
      <br></br>
      {paragraphs.map(p => (
        <CardParagraph
          title={p.title}
          text={p.content}
        ></CardParagraph>
      ))}
    </>
  );
};

export default SidebarInfo;
