import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CheckCircleAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CheckCircleAlt01Icon.displayName = "CheckCircleAlt01";
var CheckCircleAlt01_default = CheckCircleAlt01Icon;
export {
  CheckCircleAlt01_default as default
};
