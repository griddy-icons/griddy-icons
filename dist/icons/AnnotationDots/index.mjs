import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AnnotationDotsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AnnotationDotsIcon.displayName = "AnnotationDots";
var AnnotationDots_default = AnnotationDotsIcon;
export {
  AnnotationDots_default as default
};
