import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryHorizontalChargingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryHorizontalChargingIcon.displayName = "BatteryHorizontalCharging";
var BatteryHorizontalCharging_default = BatteryHorizontalChargingIcon;
export {
  BatteryHorizontalCharging_default as default
};
