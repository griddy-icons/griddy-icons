import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryVerticalHalfIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryVerticalHalfIcon.displayName = "BatteryVerticalHalf";
var BatteryVerticalHalf_default = BatteryVerticalHalfIcon;
export {
  BatteryVerticalHalf_default as default
};
