import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SpacingHeightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SpacingHeightIcon.displayName = "SpacingHeight";
var SpacingHeight_default = SpacingHeightIcon;
export {
  SpacingHeight_default as default
};
