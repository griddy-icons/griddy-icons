import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowSplitUpAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowSplitUpAltIcon.displayName = "ArrowSplitUpAlt";
var ArrowSplitUpAlt_default = ArrowSplitUpAltIcon;
export {
  ArrowSplitUpAlt_default as default
};
