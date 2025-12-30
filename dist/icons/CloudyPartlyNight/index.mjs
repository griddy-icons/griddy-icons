import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CloudyPartlyNightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CloudyPartlyNightIcon.displayName = "CloudyPartlyNight";
var CloudyPartlyNight_default = CloudyPartlyNightIcon;
export {
  CloudyPartlyNight_default as default
};
