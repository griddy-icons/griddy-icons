import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LocationPinCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LocationPinCancelIcon.displayName = "LocationPinCancel";
var LocationPinCancel_default = LocationPinCancelIcon;
export {
  LocationPinCancel_default as default
};
