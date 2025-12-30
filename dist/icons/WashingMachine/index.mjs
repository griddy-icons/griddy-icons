import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WashingMachineIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WashingMachineIcon.displayName = "WashingMachine";
var WashingMachine_default = WashingMachineIcon;
export {
  WashingMachine_default as default
};
