import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryVerticalTwoThirdsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryVerticalTwoThirdsIcon.displayName = "BatteryVerticalTwoThirds";
var BatteryVerticalTwoThirds_default = BatteryVerticalTwoThirdsIcon;
export {
  BatteryVerticalTwoThirds_default as default
};
