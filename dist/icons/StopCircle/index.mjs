import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const StopCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
StopCircleIcon.displayName = "StopCircle";
var StopCircle_default = StopCircleIcon;
export {
  StopCircle_default as default
};
