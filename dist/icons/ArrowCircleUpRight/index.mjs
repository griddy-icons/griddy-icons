import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowCircleUpRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowCircleUpRightIcon.displayName = "ArrowCircleUpRight";
var ArrowCircleUpRight_default = ArrowCircleUpRightIcon;
export {
  ArrowCircleUpRight_default as default
};
