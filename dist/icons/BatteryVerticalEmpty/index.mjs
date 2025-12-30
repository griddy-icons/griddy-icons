import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryVerticalEmptyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryVerticalEmptyIcon.displayName = "BatteryVerticalEmpty";
var BatteryVerticalEmpty_default = BatteryVerticalEmptyIcon;
export {
  BatteryVerticalEmpty_default as default
};
