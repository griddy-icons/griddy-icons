import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowSplitRightAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowSplitRightAltIcon.displayName = "ArrowSplitRightAlt";
var ArrowSplitRightAlt_default = ArrowSplitRightAltIcon;
export {
  ArrowSplitRightAlt_default as default
};
