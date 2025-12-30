import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartBarAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartBarAltIcon.displayName = "ChartBarAlt";
var ChartBarAlt_default = ChartBarAltIcon;
export {
  ChartBarAlt_default as default
};
