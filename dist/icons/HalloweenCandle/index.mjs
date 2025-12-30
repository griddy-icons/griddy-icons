import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenCandleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenCandleIcon.displayName = "HalloweenCandle";
var HalloweenCandle_default = HalloweenCandleIcon;
export {
  HalloweenCandle_default as default
};
