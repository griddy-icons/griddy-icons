import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothBracesIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothBracesIcon.displayName = "ToothBraces";
var ToothBraces_default = ToothBracesIcon;
export {
  ToothBraces_default as default
};
