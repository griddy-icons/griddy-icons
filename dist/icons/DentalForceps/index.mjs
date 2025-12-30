import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DentalForcepsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DentalForcepsIcon.displayName = "DentalForceps";
var DentalForceps_default = DentalForcepsIcon;
export {
  DentalForceps_default as default
};
