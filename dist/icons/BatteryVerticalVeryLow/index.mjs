import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryVerticalVeryLowIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryVerticalVeryLowIcon.displayName = "BatteryVerticalVeryLow";
var BatteryVerticalVeryLow_default = BatteryVerticalVeryLowIcon;
export {
  BatteryVerticalVeryLow_default as default
};
