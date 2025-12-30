import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowCircleRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowCircleRightIcon.displayName = "ArrowCircleRight";
var ArrowCircleRight_default = ArrowCircleRightIcon;
export {
  ArrowCircleRight_default as default
};
