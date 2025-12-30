import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BaconAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BaconAltIcon.displayName = "BaconAlt";
var BaconAlt_default = BaconAltIcon;
export {
  BaconAlt_default as default
};
