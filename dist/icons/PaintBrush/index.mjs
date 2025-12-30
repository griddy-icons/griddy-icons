import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PaintBrushIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PaintBrushIcon.displayName = "PaintBrush";
var PaintBrush_default = PaintBrushIcon;
export {
  PaintBrush_default as default
};
