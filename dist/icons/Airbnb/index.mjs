import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AirbnbIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AirbnbIcon.displayName = "Airbnb";
var Airbnb_default = AirbnbIcon;
export {
  Airbnb_default as default
};
