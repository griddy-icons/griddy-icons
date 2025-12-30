import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HourglassIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HourglassIcon.displayName = "Hourglass";
var Hourglass_default = HourglassIcon;
export {
  Hourglass_default as default
};
