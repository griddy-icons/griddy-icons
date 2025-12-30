import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LocationMyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LocationMyIcon.displayName = "LocationMy";
var LocationMy_default = LocationMyIcon;
export {
  LocationMy_default as default
};
