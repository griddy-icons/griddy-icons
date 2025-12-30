import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const InterdentalBrushIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
InterdentalBrushIcon.displayName = "InterdentalBrush";
var InterdentalBrush_default = InterdentalBrushIcon;
export {
  InterdentalBrush_default as default
};
