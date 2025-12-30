import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RaindropsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RaindropsIcon.displayName = "Raindrops";
var Raindrops_default = RaindropsIcon;
export {
  Raindrops_default as default
};
