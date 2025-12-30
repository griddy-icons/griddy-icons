import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryVerticalChargingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryVerticalChargingIcon.displayName = "BatteryVerticalCharging";
var BatteryVerticalCharging_default = BatteryVerticalChargingIcon;
export {
  BatteryVerticalCharging_default as default
};
