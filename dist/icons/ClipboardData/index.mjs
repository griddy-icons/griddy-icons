import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ClipboardDataIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ClipboardDataIcon.displayName = "ClipboardData";
var ClipboardData_default = ClipboardDataIcon;
export {
  ClipboardData_default as default
};
