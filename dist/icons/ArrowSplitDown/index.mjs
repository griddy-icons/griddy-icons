import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowSplitDownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowSplitDownIcon.displayName = "ArrowSplitDown";
var ArrowSplitDown_default = ArrowSplitDownIcon;
export {
  ArrowSplitDown_default as default
};
