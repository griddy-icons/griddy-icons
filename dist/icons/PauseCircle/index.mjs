import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PauseCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PauseCircleIcon.displayName = "PauseCircle";
var PauseCircle_default = PauseCircleIcon;
export {
  PauseCircle_default as default
};
