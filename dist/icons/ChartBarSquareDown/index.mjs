import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartBarSquareDownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartBarSquareDownIcon.displayName = "ChartBarSquareDown";
var ChartBarSquareDown_default = ChartBarSquareDownIcon;
export {
  ChartBarSquareDown_default as default
};
