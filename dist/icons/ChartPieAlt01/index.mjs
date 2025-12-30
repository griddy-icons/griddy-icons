import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartPieAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartPieAlt01Icon.displayName = "ChartPieAlt01";
var ChartPieAlt01_default = ChartPieAlt01Icon;
export {
  ChartPieAlt01_default as default
};
