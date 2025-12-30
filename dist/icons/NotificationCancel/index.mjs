import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const NotificationCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
NotificationCancelIcon.displayName = "NotificationCancel";
var NotificationCancel_default = NotificationCancelIcon;
export {
  NotificationCancel_default as default
};
