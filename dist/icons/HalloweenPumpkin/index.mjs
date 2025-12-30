import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenPumpkinIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenPumpkinIcon.displayName = "HalloweenPumpkin";
var HalloweenPumpkin_default = HalloweenPumpkinIcon;
export {
  HalloweenPumpkin_default as default
};
