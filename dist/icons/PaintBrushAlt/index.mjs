import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PaintBrushAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PaintBrushAltIcon.displayName = "PaintBrushAlt";
var PaintBrushAlt_default = PaintBrushAltIcon;
export {
  PaintBrushAlt_default as default
};
