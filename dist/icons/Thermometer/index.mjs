import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ThermometerIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ThermometerIcon.displayName = "Thermometer";
var Thermometer_default = ThermometerIcon;
export {
  Thermometer_default as default
};
