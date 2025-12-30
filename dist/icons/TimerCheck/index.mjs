import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TimerCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TimerCheckIcon.displayName = "TimerCheck";
var TimerCheck_default = TimerCheckIcon;
export {
  TimerCheck_default as default
};
