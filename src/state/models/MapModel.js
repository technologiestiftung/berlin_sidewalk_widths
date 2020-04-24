import { action } from "easy-peasy";
import c from "config";

const MapModel = {
  mapCenter: c.map.mapCenter,
  setMapCenter: action((state, payload) => {
    state.mapCenter = payload;
  }),
  mapZoom: c.map.mapZoom,
  setMapZoom: action((state, payload) => {
    state.mapZoom = payload;
  }),
};

export default MapModel;
