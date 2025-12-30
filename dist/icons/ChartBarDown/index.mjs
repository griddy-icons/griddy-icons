import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartBarDownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartBarDownIcon.displayName = "ChartBarDown";
var ChartBarDown_default = ChartBarDownIcon;
export {
  ChartBarDown_default as default
};
