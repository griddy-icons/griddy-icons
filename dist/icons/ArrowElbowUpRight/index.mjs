import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowElbowUpRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowElbowUpRightIcon.displayName = "ArrowElbowUpRight";
var ArrowElbowUpRight_default = ArrowElbowUpRightIcon;
export {
  ArrowElbowUpRight_default as default
};
