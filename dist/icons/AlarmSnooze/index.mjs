import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlarmSnoozeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlarmSnoozeIcon.displayName = "AlarmSnooze";
var AlarmSnooze_default = AlarmSnoozeIcon;
export {
  AlarmSnooze_default as default
};
