import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartPieAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartPieAlt02Icon.displayName = "ChartPieAlt02";
var ChartPieAlt02_default = ChartPieAlt02Icon;
export {
  ChartPieAlt02_default as default
};
