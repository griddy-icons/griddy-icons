import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartPieIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartPieIcon.displayName = "ChartPie";
var ChartPie_default = ChartPieIcon;
export {
  ChartPie_default as default
};
