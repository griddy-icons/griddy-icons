import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CheckCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CheckCircleIcon.displayName = "CheckCircle";
var CheckCircle_default = CheckCircleIcon;
export {
  CheckCircle_default as default
};
