import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenLollipopIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenLollipopIcon.displayName = "HalloweenLollipop";
var HalloweenLollipop_default = HalloweenLollipopIcon;
export {
  HalloweenLollipop_default as default
};
