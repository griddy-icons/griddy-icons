import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ClipboardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ClipboardIcon.displayName = "Clipboard";
var Clipboard_default = ClipboardIcon;
export {
  Clipboard_default as default
};
