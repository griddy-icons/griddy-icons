import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ClipboardCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ClipboardCancelIcon.displayName = "ClipboardCancel";
var ClipboardCancel_default = ClipboardCancelIcon;
export {
  ClipboardCancel_default as default
};
