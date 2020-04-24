import MapModel from "./MapModel";
import DataModel from "./DataModel";
import TooltipModel from "./TooltipModel";
import TagsModel from "./TagsModel";
import FilterModel from "./FilterModel";
import LegendModel from "./LegendModel";
import FavModel from "./FavModel";

export default {
  ...MapModel,
  ...DataModel,
  ...LegendModel,
  ...TagsModel,
  ...FilterModel,
  ...FavModel,
  ...TooltipModel,
};
