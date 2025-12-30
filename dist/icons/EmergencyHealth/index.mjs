import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EmergencyHealthIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EmergencyHealthIcon.displayName = "EmergencyHealth";
var EmergencyHealth_default = EmergencyHealthIcon;
export {
  EmergencyHealth_default as default
};
