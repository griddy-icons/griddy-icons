import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenCandyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenCandyIcon.displayName = "HalloweenCandy";
var HalloweenCandy_default = HalloweenCandyIcon;
export {
  HalloweenCandy_default as default
};
