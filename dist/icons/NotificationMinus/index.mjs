import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const NotificationMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
NotificationMinusIcon.displayName = "NotificationMinus";
var NotificationMinus_default = NotificationMinusIcon;
export {
  NotificationMinus_default as default
};
