import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShieldCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShieldCancelIcon.displayName = "ShieldCancel";
var ShieldCancel_default = ShieldCancelIcon;
export {
  ShieldCancel_default as default
};
