import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VisualstudioIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VisualstudioIcon.displayName = "Visualstudio";
var Visualstudio_default = VisualstudioIcon;
export {
  Visualstudio_default as default
};
