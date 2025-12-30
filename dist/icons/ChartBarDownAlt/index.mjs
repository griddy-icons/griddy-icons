import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartBarDownAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartBarDownAltIcon.displayName = "ChartBarDownAlt";
var ChartBarDownAlt_default = ChartBarDownAltIcon;
export {
  ChartBarDownAlt_default as default
};
