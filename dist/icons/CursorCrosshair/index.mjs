import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CursorCrosshairIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CursorCrosshairIcon.displayName = "CursorCrosshair";
var CursorCrosshair_default = CursorCrosshairIcon;
export {
  CursorCrosshair_default as default
};
