import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryHorizontalLowIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryHorizontalLowIcon.displayName = "BatteryHorizontalLow";
var BatteryHorizontalLow_default = BatteryHorizontalLowIcon;
export {
  BatteryHorizontalLow_default as default
};
