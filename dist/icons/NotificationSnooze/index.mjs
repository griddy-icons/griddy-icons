import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const NotificationSnoozeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
NotificationSnoozeIcon.displayName = "NotificationSnooze";
var NotificationSnooze_default = NotificationSnoozeIcon;
export {
  NotificationSnooze_default as default
};
