import { action } from "easy-peasy";

const TooltipModel = {
  tooltipPos: null,
  setTooltipPos: action((state, payload) => {
    state.tooltipPos = payload;
  }),
  tooltipData: null,
  setTooltipData: action((state, payload) => {
    state.tooltipData = payload;
  }),
};

export default TooltipModel;
