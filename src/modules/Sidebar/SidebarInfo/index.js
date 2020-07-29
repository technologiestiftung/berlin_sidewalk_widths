import React from "react";

import c from "config";

import SidebarTitle from "../SidebarTitle";
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
