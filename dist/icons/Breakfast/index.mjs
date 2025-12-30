import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BreakfastIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BreakfastIcon.displayName = "Breakfast";
var Breakfast_default = BreakfastIcon;
export {
  Breakfast_default as default
};
