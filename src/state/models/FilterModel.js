import { action, thunk } from "easy-peasy";
import c from "config";

const FilterModel = {
  filteredData: null,
  setFilterSuccess: action((state, payload) => {
    state.filteredData = payload;
  }),
  setIsFilteredSuccess: action((state, payload) => {
    state.isFiltered = payload;
  }),
  // update is filtered sections here!
  // https://github.com/ctrlplusb/easy-peasy/issues/101
  setFilter: thunk(async (state, payload, { getState, getStoreState }) => {
    const { id, data } = payload;
    // object with state of filter (true & false)
    let localState = getState().isFiltered;
    let dataState = getState().data;

    // toggle filter of obj
    localState[id][data] = !localState[id][data];

    // update isFiltered prop of filteredData object
    dataState.features.map((feature) => {
      const { properties } = feature;
      c.filter.filter.forEach(({ id }) => {
        properties[id].forEach((prop) => {

          // if prop is set to filtered
          if (prop == data && localState[id][data]) {
            properties.filtered = true;
          }

          // if prop is NOT set to filtered
          if (prop == data && !localState[id][data]) {
            properties.filtered = false;
          }

        });
      });
      return feature;
    });


    state.setFilterSuccess(Object.assign({}, dataState));
    state.setIsFilteredSuccess(Object.assign({}, localState));
  }),
};

export default FilterModel;
