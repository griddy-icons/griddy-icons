import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TemperatureHotIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TemperatureHotIcon.displayName = "TemperatureHot";
var TemperatureHot_default = TemperatureHotIcon;
export {
  TemperatureHot_default as default
};
