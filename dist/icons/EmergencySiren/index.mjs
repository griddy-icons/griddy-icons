import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EmergencySirenIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EmergencySirenIcon.displayName = "EmergencySiren";
var EmergencySiren_default = EmergencySirenIcon;
export {
  EmergencySiren_default as default
};
