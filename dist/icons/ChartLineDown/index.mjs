import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartLineDownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartLineDownIcon.displayName = "ChartLineDown";
var ChartLineDown_default = ChartLineDownIcon;
export {
  ChartLineDown_default as default
};
