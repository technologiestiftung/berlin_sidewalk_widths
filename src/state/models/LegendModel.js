import { actionOn } from "easy-peasy";
import { scaleOrdinal } from "d3";
import c from "config";

const LegendModel = {
  fetchLegend: actionOn(
    (actions) => actions.loadDataSuccess,
    (state, target) => {
      const { payload } = target;
      const legendType = c.about.legend.id;
      let legendArr = [];
      let legendColorCodes = [];
      const color = scaleOrdinal(['#a80b0b','#f63f23', '#f09c2d','#f5de47','#77d425','#2e7c27']);

      console.log(target)

      // eslint-disable-next-line no-unused-vars
      const categories = payload.features.forEach((feature, i) => {

        const val = feature.properties[legendType];


        if (!legendArr.includes(val)) {
          legendArr.push(val);
          legendColorCodes.push({ id: val, color: [color(i)], count: 1 });
        } else {
          const active = legendColorCodes.find(({ id }) => id === val);
          active.count += 1;
        }
      });

      payload.features.map((feature) => {
        const val = feature.properties[legendType];
        const colorObj = legendColorCodes.find(({ id }) => id === val);
        feature.properties.color = colorObj.color;
        feature.properties.filtered = false;
        return {
          ...feature,
        };
      });

      state.categories = legendColorCodes;
    },
  ),
};

export default LegendModel;
