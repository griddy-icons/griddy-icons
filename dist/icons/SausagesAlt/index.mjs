import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SausagesAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SausagesAltIcon.displayName = "SausagesAlt";
var SausagesAlt_default = SausagesAltIcon;
export {
  SausagesAlt_default as default
};
