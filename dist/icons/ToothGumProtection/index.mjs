import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothGumProtectionIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothGumProtectionIcon.displayName = "ToothGumProtection";
var ToothGumProtection_default = ToothGumProtectionIcon;
export {
  ToothGumProtection_default as default
};
