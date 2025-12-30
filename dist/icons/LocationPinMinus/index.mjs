import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LocationPinMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LocationPinMinusIcon.displayName = "LocationPinMinus";
var LocationPinMinus_default = LocationPinMinusIcon;
export {
  LocationPinMinus_default as default
};
