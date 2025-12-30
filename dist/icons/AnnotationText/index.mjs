import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AnnotationTextIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AnnotationTextIcon.displayName = "AnnotationText";
var AnnotationText_default = AnnotationTextIcon;
export {
  AnnotationText_default as default
};
