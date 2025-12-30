import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ParkingGarageIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ParkingGarageIcon.displayName = "ParkingGarage";
var ParkingGarage_default = ParkingGarageIcon;
export {
  ParkingGarage_default as default
};
