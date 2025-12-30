import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HairDryerIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HairDryerIcon.displayName = "HairDryer";
var HairDryer_default = HairDryerIcon;
export {
  HairDryer_default as default
};
