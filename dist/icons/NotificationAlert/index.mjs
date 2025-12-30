import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const NotificationAlertIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
NotificationAlertIcon.displayName = "NotificationAlert";
var NotificationAlert_default = NotificationAlertIcon;
export {
  NotificationAlert_default as default
};
