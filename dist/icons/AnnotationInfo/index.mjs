import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AnnotationInfoIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AnnotationInfoIcon.displayName = "AnnotationInfo";
var AnnotationInfo_default = AnnotationInfoIcon;
export {
  AnnotationInfo_default as default
};
