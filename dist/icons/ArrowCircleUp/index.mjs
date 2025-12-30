import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowCircleUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowCircleUpIcon.displayName = "ArrowCircleUp";
var ArrowCircleUp_default = ArrowCircleUpIcon;
export {
  ArrowCircleUp_default as default
};
