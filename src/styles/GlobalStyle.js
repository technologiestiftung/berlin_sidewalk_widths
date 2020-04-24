import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  ${styledNormalize}

  @font-face {
      font-family: "Clan Bold";
      src: url("../../fonts/clanot-bold-webfont.woff") format("woff");
      font-weight: 800;
      font-style: normal;
  }

  @font-face {
      font-family: "Clan Medium";
      src: url("../../fonts/clanot-medium-webfont.woff") format("woff");
      font-weight: 600;
      font-style: normal;
  }

  @font-face {
      font-family: "Clan Book";
      src: url("../../fonts/clanot-book-webfont.woff") format("woff");
      font-weight: 400;
      font-style: normal;
  }


  mapboxgl-ctrl-logo {
    display: none;
  }

  .mapbox-improve-map {
      display: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: "Clan Medium";
  }
`;
