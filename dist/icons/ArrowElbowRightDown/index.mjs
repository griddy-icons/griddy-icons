import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowElbowRightDownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowElbowRightDownIcon.displayName = "ArrowElbowRightDown";
var ArrowElbowRightDown_default = ArrowElbowRightDownIcon;
export {
  ArrowElbowRightDown_default as default
};
