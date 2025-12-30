import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BriefcaseAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BriefcaseAltIcon.displayName = "BriefcaseAlt";
var BriefcaseAlt_default = BriefcaseAltIcon;
export {
  BriefcaseAlt_default as default
};
