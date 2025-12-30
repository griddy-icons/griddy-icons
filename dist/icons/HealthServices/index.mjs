import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HealthServicesIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HealthServicesIcon.displayName = "HealthServices";
var HealthServices_default = HealthServicesIcon;
export {
  HealthServices_default as default
};
