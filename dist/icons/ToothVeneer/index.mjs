import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothVeneerIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothVeneerIcon.displayName = "ToothVeneer";
var ToothVeneer_default = ToothVeneerIcon;
export {
  ToothVeneer_default as default
};
