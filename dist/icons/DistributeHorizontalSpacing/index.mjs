import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DistributeHorizontalSpacingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DistributeHorizontalSpacingIcon.displayName = "DistributeHorizontalSpacing";
var DistributeHorizontalSpacing_default = DistributeHorizontalSpacingIcon;
export {
  DistributeHorizontalSpacing_default as default
};
