import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RainHeavyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RainHeavyIcon.displayName = "RainHeavy";
var RainHeavy_default = RainHeavyIcon;
export {
  RainHeavy_default as default
};
