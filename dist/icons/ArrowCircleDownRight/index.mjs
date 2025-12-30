import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowCircleDownRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowCircleDownRightIcon.displayName = "ArrowCircleDownRight";
var ArrowCircleDownRight_default = ArrowCircleDownRightIcon;
export {
  ArrowCircleDownRight_default as default
};
