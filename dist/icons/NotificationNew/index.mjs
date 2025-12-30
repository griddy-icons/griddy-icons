import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const NotificationNewIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
NotificationNewIcon.displayName = "NotificationNew";
var NotificationNew_default = NotificationNewIcon;
export {
  NotificationNew_default as default
};
