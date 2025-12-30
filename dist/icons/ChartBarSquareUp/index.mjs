import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartBarSquareUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartBarSquareUpIcon.displayName = "ChartBarSquareUp";
var ChartBarSquareUp_default = ChartBarSquareUpIcon;
export {
  ChartBarSquareUp_default as default
};
