import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryVerticalFullIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryVerticalFullIcon.displayName = "BatteryVerticalFull";
var BatteryVerticalFull_default = BatteryVerticalFullIcon;
export {
  BatteryVerticalFull_default as default
};
