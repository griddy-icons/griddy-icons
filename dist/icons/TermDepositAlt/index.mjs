import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TermDepositAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TermDepositAltIcon.displayName = "TermDepositAlt";
var TermDepositAlt_default = TermDepositAltIcon;
export {
  TermDepositAlt_default as default
};
