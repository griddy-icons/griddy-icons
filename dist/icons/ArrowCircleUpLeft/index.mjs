import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowCircleUpLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowCircleUpLeftIcon.displayName = "ArrowCircleUpLeft";
var ArrowCircleUpLeft_default = ArrowCircleUpLeftIcon;
export {
  ArrowCircleUpLeft_default as default
};
