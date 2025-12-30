import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WaterWaveBigIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WaterWaveBigIcon.displayName = "WaterWaveBig";
var WaterWaveBig_default = WaterWaveBigIcon;
export {
  WaterWaveBig_default as default
};
