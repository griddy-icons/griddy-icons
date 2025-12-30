import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChargingStationIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChargingStationIcon.displayName = "ChargingStation";
var ChargingStation_default = ChargingStationIcon;
export {
  ChargingStation_default as default
};
