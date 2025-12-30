import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AirConditionerIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AirConditionerIcon.displayName = "AirConditioner";
var AirConditioner_default = AirConditionerIcon;
export {
  AirConditioner_default as default
};
