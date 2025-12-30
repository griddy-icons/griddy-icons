import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GraduationCapAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GraduationCapAltIcon.displayName = "GraduationCapAlt";
var GraduationCapAlt_default = GraduationCapAltIcon;
export {
  GraduationCapAlt_default as default
};
