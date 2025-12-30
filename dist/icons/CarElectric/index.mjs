import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CarElectricIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CarElectricIcon.displayName = "CarElectric";
var CarElectric_default = CarElectricIcon;
export {
  CarElectric_default as default
};
