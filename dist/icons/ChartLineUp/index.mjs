import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartLineUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartLineUpIcon.displayName = "ChartLineUp";
var ChartLineUp_default = ChartLineUpIcon;
export {
  ChartLineUp_default as default
};
