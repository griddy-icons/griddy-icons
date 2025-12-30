import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TemperatureCelsiusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TemperatureCelsiusIcon.displayName = "TemperatureCelsius";
var TemperatureCelsius_default = TemperatureCelsiusIcon;
export {
  TemperatureCelsius_default as default
};
