import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ClipboardCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ClipboardCheckIcon.displayName = "ClipboardCheck";
var ClipboardCheck_default = ClipboardCheckIcon;
export {
  ClipboardCheck_default as default
};
