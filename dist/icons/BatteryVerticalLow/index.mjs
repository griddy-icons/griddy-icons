import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryVerticalLowIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryVerticalLowIcon.displayName = "BatteryVerticalLow";
var BatteryVerticalLow_default = BatteryVerticalLowIcon;
export {
  BatteryVerticalLow_default as default
};
