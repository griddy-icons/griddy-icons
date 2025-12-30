import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothbrushAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothbrushAltIcon.displayName = "ToothbrushAlt";
var ToothbrushAlt_default = ToothbrushAltIcon;
export {
  ToothbrushAlt_default as default
};
