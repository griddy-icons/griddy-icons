import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CheckCircleAlt03Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CheckCircleAlt03Icon.displayName = "CheckCircleAlt03";
var CheckCircleAlt03_default = CheckCircleAlt03Icon;
export {
  CheckCircleAlt03_default as default
};
