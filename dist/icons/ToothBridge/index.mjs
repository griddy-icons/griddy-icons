import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothBridgeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothBridgeIcon.displayName = "ToothBridge";
var ToothBridge_default = ToothBridgeIcon;
export {
  ToothBridge_default as default
};
