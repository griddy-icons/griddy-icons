import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowElbowUpLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowElbowUpLeftIcon.displayName = "ArrowElbowUpLeft";
var ArrowElbowUpLeft_default = ArrowElbowUpLeftIcon;
export {
  ArrowElbowUpLeft_default as default
};
