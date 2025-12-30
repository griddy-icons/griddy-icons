import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlertCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlertCircleIcon.displayName = "AlertCircle";
var AlertCircle_default = AlertCircleIcon;
export {
  AlertCircle_default as default
};
