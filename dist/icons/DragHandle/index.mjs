import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DragHandleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DragHandleIcon.displayName = "DragHandle";
var DragHandle_default = DragHandleIcon;
export {
  DragHandle_default as default
};
