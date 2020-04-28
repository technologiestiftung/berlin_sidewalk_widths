export default {
  socialTags: {
  },
  map: {
    mapCenter: [13.3514900, 52.5080961],
    mapZoom: [14],
    marker: {
      color: {
        selected: 'green',
        default: 'black',
      }
    },
    config: {
      minZoom: 12,
      maxZoom: 17,
      dragRotate: false,
      bearing: 0,
      maxBounds: [
        [10, 50],
        [15, 54],
      ],
      accessToken: process.env.REACT_APP_MAP_TOKEN,
      style: process.env.REACT_APP_MAP_STYLE,
    },
  },
  about: {
    legend: {
      id: "class"
    },
    title: "Berlin Sidewalk widths",
    paragraphs: [
      {
        title: "Welche Gehwege erlauben einen Mindestabstand von 1,5m?",
        content: "Laut aktuellen Regelungen, müssen die Berliner einen Mindestabstand von 1,5 Meter von einander halten. Dank wärmeren Temperaturen und gelockerten Maßnahmen werden die Straßen jetzt voller und der Mindestabstand wird schwieriger zu halten – besonders wo die Gehwege eng sind. Diese Karte zeigt auf, in welchen Stadtteilen die Straßeninfrakstruktur möglicherweise einen Mindestabstand von 1,5 Metern schlecht erlaubt.",
      },
      {
        title: "Über die Daten",
        content: "Dieser Datensatz basiert sich auf Daten aus dem „Straßenbefahrung 2014“ Datensatz im Geoportal Berlin. Mehr Informationen zum Datensatz und zur Karte sind [auf GitHub](https://github.com/technologiestiftung/berlin_sidewalk_widths) zu finden.",
      },
    ]
  },
  fav: {
    title: 'Favoriten'
  },
  filter: {
    title: 'Filter und Suche',
    filter: [
      {
        id: "class2",
        component: "tags",
        label: "Gehwegbreite"
      }
    ]
  },
  tooltip: [
    {
    id: "width",
    component: "title",
    label: "Dieser Gehweg hat eine breite von",
    },
  ],
  detail: [
    {
      id: "class",
      component: "title",
      label: "class",
    }
  ],
};
