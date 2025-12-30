import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LocationPinCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LocationPinCheckIcon.displayName = "LocationPinCheck";
var LocationPinCheck_default = LocationPinCheckIcon;
export {
  LocationPinCheck_default as default
};
