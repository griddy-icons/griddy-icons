import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowCircleDownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowCircleDownIcon.displayName = "ArrowCircleDown";
var ArrowCircleDown_default = ArrowCircleDownIcon;
export {
  ArrowCircleDown_default as default
};
