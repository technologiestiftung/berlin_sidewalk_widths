import React from "react";

import SidebarTitle from "../SidebarTitle";
import CardCompact from "components/Card/CardCompact";

const ResultsTitle = (data) => {
  return data ? `${data.features.length} Ergebnisse gefunden.` : 'Lade Daten ...';
}

const SidebarList = (p) => {
  const { data } = p;
  return (
    <>
      <SidebarTitle>
        { ResultsTitle(data) }
      </SidebarTitle> 
      { data && data.features.map((d, i) => {
        return (
          <CardCompact
            key={`item-${i}`}
            data={d}
          />
        );
      }) }
    </>
  );
};

export default SidebarList;
