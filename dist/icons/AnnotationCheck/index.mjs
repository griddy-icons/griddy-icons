import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AnnotationCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AnnotationCheckIcon.displayName = "AnnotationCheck";
var AnnotationCheck_default = AnnotationCheckIcon;
export {
  AnnotationCheck_default as default
};
