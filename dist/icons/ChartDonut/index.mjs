import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartDonutIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartDonutIcon.displayName = "ChartDonut";
var ChartDonut_default = ChartDonutIcon;
export {
  ChartDonut_default as default
};
