import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShipSteeringWheelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShipSteeringWheelIcon.displayName = "ShipSteeringWheel";
var ShipSteeringWheel_default = ShipSteeringWheelIcon;
export {
  ShipSteeringWheel_default as default
};
