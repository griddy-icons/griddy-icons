import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowSplitLeftAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowSplitLeftAltIcon.displayName = "ArrowSplitLeftAlt";
var ArrowSplitLeftAlt_default = ArrowSplitLeftAltIcon;
export {
  ArrowSplitLeftAlt_default as default
};
