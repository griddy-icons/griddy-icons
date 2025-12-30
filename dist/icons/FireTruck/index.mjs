import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FireTruckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FireTruckIcon.displayName = "FireTruck";
var FireTruck_default = FireTruckIcon;
export {
  FireTruck_default as default
};
