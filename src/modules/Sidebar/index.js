import React from "react";
import styled from "styled-components";
import { Route, withRouter, Switch } from "react-router-dom";

import SidebarInfo from "./SidebarInfo/";
import SidebarFilter from "./SidebarFilter/";
import SidebarList from "./SidebarList/";
import SidebarFav from "./SidebarFav/";
import SidebarClose from "./SidebarClose/";
import Card from "components/Card/Card";
import SidebarWrapper from './SidebarWrapper';

const SidebarContent = styled.div`
  min-width: 370px;
  max-width: 370px;
  padding: 20px 15px;
`;

const filterById = (geojson, id) => geojson ? geojson.features.find(feat => feat.properties.autoid === id) : false;

const Sidebar = (p) => {
  const { data, match, location} = p;
  const { pathname } = location;
  const isVisible = pathname !== '/';
  const id = match.params.itemId;
  let selectedItem = filterById(data,id);

  return (
    <SidebarWrapper isvisible={isVisible.toString()}>
      <SidebarClose />
      <SidebarContent>
        <Switch>
          <Route
            path="/liste/:itemId"
            render={() => {
              if (selectedItem) {
                return <Card data={selectedItem}/>
              }
            }}
          />
          <Route
            path="/liste"
            render={() => <SidebarList data={data} />}
          />
          <Route
            path="/info"
            render={() => <SidebarInfo />}
          />
          <Route
            path="/favoriten"
            render={() => <SidebarFav data={data} />}
          />
          <Route
            path="/suche"
            render={() => <SidebarFilter />}
          />
        </Switch>
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default withRouter(Sidebar);
