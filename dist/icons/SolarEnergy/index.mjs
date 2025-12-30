import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SolarEnergyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SolarEnergyIcon.displayName = "SolarEnergy";
var SolarEnergy_default = SolarEnergyIcon;
export {
  SolarEnergy_default as default
};
