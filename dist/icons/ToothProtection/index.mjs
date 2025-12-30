import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothProtectionIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothProtectionIcon.displayName = "ToothProtection";
var ToothProtection_default = ToothProtectionIcon;
export {
  ToothProtection_default as default
};
