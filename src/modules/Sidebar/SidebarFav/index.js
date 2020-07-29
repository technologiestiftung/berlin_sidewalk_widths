/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";

import c from "config";

import SidebarTitle from "../SidebarTitle";
import CardCompact from "components/Card/CardCompact";

const SidebarFav = (p) => {
  const { data } = p;
  const fav = c.fav;
  const { title } = fav;
  return (
    <>
      <SidebarTitle>{title}</SidebarTitle>
      {data &&
        data.features
          .filter((d) => d.properties.isFaved)
          .map((d, i) => {
            return <CardCompact key={`item-${i}`} data={d} />;
          })}
    </>
  );
};

export default SidebarFav;
