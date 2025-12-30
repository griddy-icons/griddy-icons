import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AnnotationQuestionIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AnnotationQuestionIcon.displayName = "AnnotationQuestion";
var AnnotationQuestion_default = AnnotationQuestionIcon;
export {
  AnnotationQuestion_default as default
};
