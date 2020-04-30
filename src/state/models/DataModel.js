import { action, thunk, computed, actionOn } from "easy-peasy";
import { id } from "utils";
import c from "config";

const DataModel = {
  data: null,
  detailData: false,
  highlightData: false,
  selectedData: false,
  isLoading: computed((state) => {
    return !state.data;
  }),
  loadDataSuccess: action((state, payload) => {
    state.data = payload;
    state.filteredData = payload;
  }),
  loadDataFail: action((state) => {
    state.data = null;
  }),
  loadData: thunk(async (actions) => {
    try {
      const response = await fetch("/data/data_test.geojson");
      const data = await response.json();
      data.features.map((feat) => {
        feat.properties.autoid = id();
        feat.properties.isFaved = false;
      });
      actions.loadDataSuccess(data);
    } catch (_) {
      actions.loadDataFail();
    }
  }),
  setHighlightData: action((state, payload) => {
    state.highlightData = payload;
    // state.mapZoom = payload ? [12] : c.map.mapZoom;
    state.mapCenter = payload ? payload.geometry.coordinates : c.map.mapCenter;
  }),
  setSelectedData: action((state, payload) => (state.selectedData = payload)),
};

export default DataModel;
