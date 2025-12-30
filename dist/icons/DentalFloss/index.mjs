import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DentalFlossIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DentalFlossIcon.displayName = "DentalFloss";
var DentalFloss_default = DentalFlossIcon;
export {
  DentalFloss_default as default
};
