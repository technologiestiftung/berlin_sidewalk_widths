/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useStoreState } from "easy-peasy";

import c from "config";

import SidebarTitle from "../SidebarTitle";
import Tags from "components/Tags";

const SidebarFilter = (p) => {
  const data = c.filter;
  const { title, filter } = data;
  const filterState = useStoreState((state) => state.filter);
  return (
    <>
      <SidebarTitle>{title}</SidebarTitle>
      {filterState && <Tags filterValues={filter} filter={filterState} />}
    </>
  );
};

export default SidebarFilter;
