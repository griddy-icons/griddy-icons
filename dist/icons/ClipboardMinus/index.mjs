import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ClipboardMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ClipboardMinusIcon.displayName = "ClipboardMinus";
var ClipboardMinus_default = ClipboardMinusIcon;
export {
  ClipboardMinus_default as default
};
