import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowCircleDownLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowCircleDownLeftIcon.displayName = "ArrowCircleDownLeft";
var ArrowCircleDownLeft_default = ArrowCircleDownLeftIcon;
export {
  ArrowCircleDownLeft_default as default
};
