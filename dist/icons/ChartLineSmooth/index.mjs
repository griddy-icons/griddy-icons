import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartLineSmoothIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartLineSmoothIcon.displayName = "ChartLineSmooth";
var ChartLineSmooth_default = ChartLineSmoothIcon;
export {
  ChartLineSmooth_default as default
};
