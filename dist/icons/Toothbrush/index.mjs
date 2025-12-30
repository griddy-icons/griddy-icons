import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothbrushIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothbrushIcon.displayName = "Toothbrush";
var Toothbrush_default = ToothbrushIcon;
export {
  Toothbrush_default as default
};
