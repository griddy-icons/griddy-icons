import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DrawingCompassIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DrawingCompassIcon.displayName = "DrawingCompass";
var DrawingCompass_default = DrawingCompassIcon;
export {
  DrawingCompass_default as default
};
