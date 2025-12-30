import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CursorHandAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CursorHandAltIcon.displayName = "CursorHandAlt";
var CursorHandAlt_default = CursorHandAltIcon;
export {
  CursorHandAlt_default as default
};
