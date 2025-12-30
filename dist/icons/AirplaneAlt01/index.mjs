import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AirplaneAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AirplaneAlt01Icon.displayName = "AirplaneAlt01";
var AirplaneAlt01_default = AirplaneAlt01Icon;
export {
  AirplaneAlt01_default as default
};
