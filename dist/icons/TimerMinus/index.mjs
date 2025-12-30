import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TimerMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TimerMinusIcon.displayName = "TimerMinus";
var TimerMinus_default = TimerMinusIcon;
export {
  TimerMinus_default as default
};
