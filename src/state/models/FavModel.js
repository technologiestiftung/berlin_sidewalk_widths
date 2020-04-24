import { action, thunk } from "easy-peasy";
import { xor } from 'lodash';

const ColorModel = {
  favs: [],
  setFavAction: action((state,payload) => {
    state.favs = payload;
  }),
  setFavedDataAction: action((state,payload) => {
    state.filteredData = Object.assign({}, payload);
  }),
  setFav: thunk(async (actions, payload, { getState, gertStoreState }) => {
    const id = payload;
    let favsState = getState().favs;
    let filteredDataState = getState().filteredData;
    const toggled = xor(favsState, [id])

    filteredDataState.features.map(feature => {
      const { properties } = feature;
      const { autoid } = properties;
      if (toggled.includes(autoid)) {
        properties.isFaved = true;
      } else {
        properties.isFaved = false;
      }
      return feature;
    })
    actions.setFavAction(toggled);
    actions.setFavedDataAction(filteredDataState);
  })
};

export default ColorModel;
