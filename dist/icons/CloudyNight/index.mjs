import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CloudyNightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CloudyNightIcon.displayName = "CloudyNight";
var CloudyNight_default = CloudyNightIcon;
export {
  CloudyNight_default as default
};
