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
      maxZoom: 22,
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
    title: "Sidewalk widths Berlin",
    paragraphs: [
      {
        title: "Welche Gehwege erlauben einen Mindestabstand von 1,5 Metern?",
        content: "Nach aktueller Regelung, sollen die Berliner*innen einen Abstand von mindestens 1,5 Metern zueinander halten. Dank höherer Temperaturen und gelockerter Maßnahmen, treibt es allerdings viele nach draußen. Den empfohlenen Mindestabstand zu halten, kann manchmal schwierig sein – besonders dort, wo die Gehwege schmal sind. Diese Karte zeigt, wie sich die Berliner Kieze in Sachen Gehweginfrastruktur voneinander unterscheiden und welche Straßen einen permanenten Mindestabstand von 1,5 Metern unter Umständen erschweren.",
      },
      {
        title: "Datengrundlage",
        content: "Der Datensatz der Gehwegbreiten basiert auf den Gehwegpositionen der „Straßenbefahrung 2014“ der Senatsverwaltung für Umwelt, Verkehr und Klimaschutz Berlin. Der zugrundeliegende Datensatz steht über das [Open Data Portal Berlin](https://daten.berlin.de/datensaetze/straßenbefahrung-2014-gehweg-wfs-0) frei zur Verfügung. Mehr Informationen zur Berechnung der Gehwegbreiten und zur Kartendarstellung sind [auf GitHub](https://github.com/technologiestiftung/berlin_sidewalk_widths) zu finden.",
      },
    ]
  },
  fav: {
    title: 'Favoriten'
  },
  filter: {
    title: 'Filter und Suche',
    filter: [

    ]
  },
  tooltip: [
    {
    id: "width_str",
    component: "title",
    label: "Breite",
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
