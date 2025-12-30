import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowCircleLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowCircleLeftIcon.displayName = "ArrowCircleLeft";
var ArrowCircleLeft_default = ArrowCircleLeftIcon;
export {
  ArrowCircleLeft_default as default
};
