import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SpacingWidthIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SpacingWidthIcon.displayName = "SpacingWidth";
var SpacingWidth_default = SpacingWidthIcon;
export {
  SpacingWidth_default as default
};
