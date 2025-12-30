import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const InfinityAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
InfinityAltIcon.displayName = "InfinityAlt";
var InfinityAlt_default = InfinityAltIcon;
export {
  InfinityAlt_default as default
};
