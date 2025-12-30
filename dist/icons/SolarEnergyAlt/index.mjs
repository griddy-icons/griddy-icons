import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SolarEnergyAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SolarEnergyAltIcon.displayName = "SolarEnergyAlt";
var SolarEnergyAlt_default = SolarEnergyAltIcon;
export {
  SolarEnergyAlt_default as default
};
