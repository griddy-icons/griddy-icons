import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShieldAlertIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShieldAlertIcon.displayName = "ShieldAlert";
var ShieldAlert_default = ShieldAlertIcon;
export {
  ShieldAlert_default as default
};
