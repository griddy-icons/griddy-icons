import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ScooterAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ScooterAltIcon.displayName = "ScooterAlt";
var ScooterAlt_default = ScooterAltIcon;
export {
  ScooterAlt_default as default
};
