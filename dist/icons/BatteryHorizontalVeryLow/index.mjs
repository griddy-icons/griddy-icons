import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryHorizontalVeryLowIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryHorizontalVeryLowIcon.displayName = "BatteryHorizontalVeryLow";
var BatteryHorizontalVeryLow_default = BatteryHorizontalVeryLowIcon;
export {
  BatteryHorizontalVeryLow_default as default
};
