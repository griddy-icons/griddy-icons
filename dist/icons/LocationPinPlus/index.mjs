import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LocationPinPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LocationPinPlusIcon.displayName = "LocationPinPlus";
var LocationPinPlus_default = LocationPinPlusIcon;
export {
  LocationPinPlus_default as default
};
