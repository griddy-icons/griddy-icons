import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HealthCrossIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HealthCrossIcon.displayName = "HealthCross";
var HealthCross_default = HealthCrossIcon;
export {
  HealthCross_default as default
};
