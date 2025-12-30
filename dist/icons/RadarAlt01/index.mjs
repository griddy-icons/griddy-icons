import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RadarAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RadarAlt01Icon.displayName = "RadarAlt01";
var RadarAlt01_default = RadarAlt01Icon;
export {
  RadarAlt01_default as default
};
