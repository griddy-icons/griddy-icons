import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartBarUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartBarUpIcon.displayName = "ChartBarUp";
var ChartBarUp_default = ChartBarUpIcon;
export {
  ChartBarUp_default as default
};
