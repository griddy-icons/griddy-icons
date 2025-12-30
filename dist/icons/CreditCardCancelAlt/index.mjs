import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardCancelAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardCancelAltIcon.displayName = "CreditCardCancelAlt";
var CreditCardCancelAlt_default = CreditCardCancelAltIcon;
export {
  CreditCardCancelAlt_default as default
};
