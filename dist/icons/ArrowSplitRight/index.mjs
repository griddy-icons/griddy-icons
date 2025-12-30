import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowSplitRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowSplitRightIcon.displayName = "ArrowSplitRight";
var ArrowSplitRight_default = ArrowSplitRightIcon;
export {
  ArrowSplitRight_default as default
};
