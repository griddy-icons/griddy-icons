import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AnnotationAlertIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AnnotationAlertIcon.displayName = "AnnotationAlert";
var AnnotationAlert_default = AnnotationAlertIcon;
export {
  AnnotationAlert_default as default
};
