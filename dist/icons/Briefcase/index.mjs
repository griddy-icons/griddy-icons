import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BriefcaseIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BriefcaseIcon.displayName = "Briefcase";
var Briefcase_default = BriefcaseIcon;
export {
  Briefcase_default as default
};
