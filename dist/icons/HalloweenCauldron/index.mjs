import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenCauldronIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenCauldronIcon.displayName = "HalloweenCauldron";
var HalloweenCauldron_default = HalloweenCauldronIcon;
export {
  HalloweenCauldron_default as default
};
