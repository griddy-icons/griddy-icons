import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LocationPinAlertIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LocationPinAlertIcon.displayName = "LocationPinAlert";
var LocationPinAlert_default = LocationPinAlertIcon;
export {
  LocationPinAlert_default as default
};
