import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AnnotationPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AnnotationPlusIcon.displayName = "AnnotationPlus";
var AnnotationPlus_default = AnnotationPlusIcon;
export {
  AnnotationPlus_default as default
};
