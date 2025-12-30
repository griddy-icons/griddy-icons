import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartPortfolioBubbleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartPortfolioBubbleIcon.displayName = "ChartPortfolioBubble";
var ChartPortfolioBubble_default = ChartPortfolioBubbleIcon;
export {
  ChartPortfolioBubble_default as default
};
