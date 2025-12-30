import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DistributeVerticalSpacingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DistributeVerticalSpacingIcon.displayName = "DistributeVerticalSpacing";
var DistributeVerticalSpacing_default = DistributeVerticalSpacingIcon;
export {
  DistributeVerticalSpacing_default as default
};
