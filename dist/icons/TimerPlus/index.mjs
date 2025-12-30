import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TimerPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TimerPlusIcon.displayName = "TimerPlus";
var TimerPlus_default = TimerPlusIcon;
export {
  TimerPlus_default as default
};
