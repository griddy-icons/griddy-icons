import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardProtectionIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardProtectionIcon.displayName = "CreditCardProtection";
var CreditCardProtection_default = CreditCardProtectionIcon;
export {
  CreditCardProtection_default as default
};
