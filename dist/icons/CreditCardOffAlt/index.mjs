import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardOffAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardOffAltIcon.displayName = "CreditCardOffAlt";
var CreditCardOffAlt_default = CreditCardOffAltIcon;
export {
  CreditCardOffAlt_default as default
};
