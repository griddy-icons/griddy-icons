import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WindEnergyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WindEnergyIcon.displayName = "WindEnergy";
var WindEnergy_default = WindEnergyIcon;
export {
  WindEnergy_default as default
};
