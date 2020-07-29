import { actionOn } from "easy-peasy";
import c from "config";

const TagsModel = {
  filter: false,
  isFiltered: {},
  fetchTags: actionOn(
  (actions) => actions.loadDataSuccess,
  (state, target) => {
    const features = target.payload.features;
    let isFiltered = {};
    const tagVarsArr = c.filter.filter;
    let filter = {};

    tagVarsArr.forEach(({ id }) => {
      filter[id] = [];
      isFiltered[id] = {};
    });

    features.forEach((feature) => {
      tagVarsArr.forEach(({ id }) => {
        const { properties } = feature;
        properties[id].forEach((property) => {
          if (!filter[id].includes(property)) {
            filter[id].push(property);
            isFiltered[id][property] = false;
          }
        });
      });
    });

    state.filter = filter;
    state.isFiltered = isFiltered;
  },
),
};

export default TagsModel;
