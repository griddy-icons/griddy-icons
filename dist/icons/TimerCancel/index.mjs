import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TimerCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TimerCancelIcon.displayName = "TimerCancel";
var TimerCancel_default = TimerCancelIcon;
export {
  TimerCancel_default as default
};
