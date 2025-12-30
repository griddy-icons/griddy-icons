import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowSplitLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowSplitLeftIcon.displayName = "ArrowSplitLeft";
var ArrowSplitLeft_default = ArrowSplitLeftIcon;
export {
  ArrowSplitLeft_default as default
};
