import React from "react";
import styled from "styled-components";
import { NavLink, withRouter, matchPath } from "react-router-dom";
import { useStoreActions } from 'easy-peasy';

import ListIcon from "@material-ui/icons/List";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import SearchIcon from "@material-ui/icons/Search";
import FavIcon from "@material-ui/icons/FavoriteBorder";

import EdgeButton from "components/EdgeButton";
import { media } from "styles/Utils";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-shadow: 0 2px 40px 0 rgba(30,55,145,0.15);
  flex-grow: 0;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 1000;

  ${media.m`
    transform: ${(props) =>
      props.isNavOpen ? "translate3d(375px, 0, 0)" : "none"};
    transition: transform 375ms;
  `}
`;

const NavItem = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const navConfig = [
  //{ path: "/liste", title: "Listenansicht", icon: <ListIcon /> },
  //{ path: "/suche", title: "Suche und Filter", icon: <SearchIcon /> },
  { path: "/info", title: "Über das Projekt", icon: <InfoIcon /> },
  // { path: "/favoriten", title: "Favoriten", icon: <FavIcon /> },
];

const Nav = (p) => {
  const { location } = p;
  const { pathname } = location;
  const setHighlightData = useStoreActions(a => a.setHighlightData);

  const isNavOpen =
    matchPath(pathname, {
      path: navConfig.map((m) => m.path),
    }) !== null;

  return (
    <NavWrapper isNavOpen={isNavOpen}>
      {navConfig.map((m) => (
        <NavItem
          exact
          to={{ pathname: m.path, search: "" }}
          key={m.path}
          onClick={() => setHighlightData(false)}
        >
          <EdgeButton
            title={m.title}
            aria-label={m.title}
            isActive={pathname === m.path}
          >
            {m.icon}
          </EdgeButton>
        </NavItem>
      ))}
    </NavWrapper>
  );
};

export default withRouter(Nav);
