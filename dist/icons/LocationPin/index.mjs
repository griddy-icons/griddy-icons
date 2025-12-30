import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LocationPinIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LocationPinIcon.displayName = "LocationPin";
var LocationPin_default = LocationPinIcon;
export {
  LocationPin_default as default
};
