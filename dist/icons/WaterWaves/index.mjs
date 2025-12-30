import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WaterWavesIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WaterWavesIcon.displayName = "WaterWaves";
var WaterWaves_default = WaterWavesIcon;
export {
  WaterWaves_default as default
};
