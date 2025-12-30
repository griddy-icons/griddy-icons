import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BloodPressureIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BloodPressureIcon.displayName = "BloodPressure";
var BloodPressure_default = BloodPressureIcon;
export {
  BloodPressure_default as default
};
