import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LocationPinOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LocationPinOffIcon.displayName = "LocationPinOff";
var LocationPinOff_default = LocationPinOffIcon;
export {
  LocationPinOff_default as default
};
