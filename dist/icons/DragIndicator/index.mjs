import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DragIndicatorIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DragIndicatorIcon.displayName = "DragIndicator";
var DragIndicator_default = DragIndicatorIcon;
export {
  DragIndicator_default as default
};
