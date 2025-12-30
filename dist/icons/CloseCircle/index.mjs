import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CloseCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CloseCircleIcon.displayName = "CloseCircle";
var CloseCircle_default = CloseCircleIcon;
export {
  CloseCircle_default as default
};
