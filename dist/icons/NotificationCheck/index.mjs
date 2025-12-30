import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const NotificationCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
NotificationCheckIcon.displayName = "NotificationCheck";
var NotificationCheck_default = NotificationCheckIcon;
export {
  NotificationCheck_default as default
};
