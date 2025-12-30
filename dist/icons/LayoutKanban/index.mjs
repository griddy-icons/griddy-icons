import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LayoutKanbanIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LayoutKanbanIcon.displayName = "LayoutKanban";
var LayoutKanban_default = LayoutKanbanIcon;
export {
  LayoutKanban_default as default
};
