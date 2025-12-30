import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SustainableEnergyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SustainableEnergyIcon.displayName = "SustainableEnergy";
var SustainableEnergy_default = SustainableEnergyIcon;
export {
  SustainableEnergy_default as default
};
