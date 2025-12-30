import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CheckAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CheckAltIcon.displayName = "CheckAlt";
var CheckAlt_default = CheckAltIcon;
export {
  CheckAlt_default as default
};
