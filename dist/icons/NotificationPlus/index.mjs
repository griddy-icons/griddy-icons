import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const NotificationPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
NotificationPlusIcon.displayName = "NotificationPlus";
var NotificationPlus_default = NotificationPlusIcon;
export {
  NotificationPlus_default as default
};
