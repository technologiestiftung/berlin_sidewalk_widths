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
        title: "Subheadline hier",
        content: "Lorem ipsum [dolorem](https://www.google.de) est. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        title: "Subheadline hier",
        content: "Lorem ipsum [dolorem](https://www.google.de) est. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
