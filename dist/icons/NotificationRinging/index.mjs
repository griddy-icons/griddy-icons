import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const NotificationRingingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
NotificationRingingIcon.displayName = "NotificationRinging";
var NotificationRinging_default = NotificationRingingIcon;
export {
  NotificationRinging_default as default
};
