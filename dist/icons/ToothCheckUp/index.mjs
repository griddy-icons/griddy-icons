import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothCheckUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothCheckUpIcon.displayName = "ToothCheckUp";
var ToothCheckUp_default = ToothCheckUpIcon;
export {
  ToothCheckUp_default as default
};
