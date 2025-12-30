import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SkipForwardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SkipForwardIcon.displayName = "SkipForward";
var SkipForward_default = SkipForwardIcon;
export {
  SkipForward_default as default
};
