import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CursorPointerIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CursorPointerIcon.displayName = "CursorPointer";
var CursorPointer_default = CursorPointerIcon;
export {
  CursorPointer_default as default
};
