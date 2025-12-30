import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowSplitDownAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowSplitDownAltIcon.displayName = "ArrowSplitDownAlt";
var ArrowSplitDownAlt_default = ArrowSplitDownAltIcon;
export {
  ArrowSplitDownAlt_default as default
};
