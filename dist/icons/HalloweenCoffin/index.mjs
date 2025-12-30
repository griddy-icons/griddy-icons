import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenCoffinIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenCoffinIcon.displayName = "HalloweenCoffin";
var HalloweenCoffin_default = HalloweenCoffinIcon;
export {
  HalloweenCoffin_default as default
};
