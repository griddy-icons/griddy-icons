import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GraduationCapIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GraduationCapIcon.displayName = "GraduationCap";
var GraduationCap_default = GraduationCapIcon;
export {
  GraduationCap_default as default
};
