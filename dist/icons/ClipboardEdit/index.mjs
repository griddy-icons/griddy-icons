import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ClipboardEditIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ClipboardEditIcon.displayName = "ClipboardEdit";
var ClipboardEdit_default = ClipboardEditIcon;
export {
  ClipboardEdit_default as default
};
