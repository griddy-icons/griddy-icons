import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardProtectionAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardProtectionAltIcon.displayName = "CreditCardProtectionAlt";
var CreditCardProtectionAlt_default = CreditCardProtectionAltIcon;
export {
  CreditCardProtectionAlt_default as default
};
