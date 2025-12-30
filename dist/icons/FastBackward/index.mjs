import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FastBackwardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FastBackwardIcon.displayName = "FastBackward";
var FastBackward_default = FastBackwardIcon;
export {
  FastBackward_default as default
};
