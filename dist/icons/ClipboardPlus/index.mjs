import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ClipboardPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ClipboardPlusIcon.displayName = "ClipboardPlus";
var ClipboardPlus_default = ClipboardPlusIcon;
export {
  ClipboardPlus_default as default
};
