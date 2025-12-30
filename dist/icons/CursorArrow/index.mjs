import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CursorArrowIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CursorArrowIcon.displayName = "CursorArrow";
var CursorArrow_default = CursorArrowIcon;
export {
  CursorArrow_default as default
};
