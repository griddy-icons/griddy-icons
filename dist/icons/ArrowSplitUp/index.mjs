import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowSplitUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowSplitUpIcon.displayName = "ArrowSplitUp";
var ArrowSplitUp_default = ArrowSplitUpIcon;
export {
  ArrowSplitUp_default as default
};
