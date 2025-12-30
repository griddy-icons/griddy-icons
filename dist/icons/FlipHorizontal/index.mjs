import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FlipHorizontalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FlipHorizontalIcon.displayName = "FlipHorizontal";
var FlipHorizontal_default = FlipHorizontalIcon;
export {
  FlipHorizontal_default as default
};
