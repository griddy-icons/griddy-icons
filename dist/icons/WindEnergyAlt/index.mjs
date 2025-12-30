import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WindEnergyAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WindEnergyAltIcon.displayName = "WindEnergyAlt";
var WindEnergyAlt_default = WindEnergyAltIcon;
export {
  WindEnergyAlt_default as default
};
