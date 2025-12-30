import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartNumberIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartNumberIcon.displayName = "ChartNumber";
var ChartNumber_default = ChartNumberIcon;
export {
  ChartNumber_default as default
};
