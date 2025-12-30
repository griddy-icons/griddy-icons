import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothCrownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothCrownIcon.displayName = "ToothCrown";
var ToothCrown_default = ToothCrownIcon;
export {
  ToothCrown_default as default
};
