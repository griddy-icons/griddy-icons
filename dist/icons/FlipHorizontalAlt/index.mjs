import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FlipHorizontalAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FlipHorizontalAltIcon.displayName = "FlipHorizontalAlt";
var FlipHorizontalAlt_default = FlipHorizontalAltIcon;
export {
  FlipHorizontalAlt_default as default
};
