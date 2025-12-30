import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowElbowRightUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowElbowRightUpIcon.displayName = "ArrowElbowRightUp";
var ArrowElbowRightUp_default = ArrowElbowRightUpIcon;
export {
  ArrowElbowRightUp_default as default
};
