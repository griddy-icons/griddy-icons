import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardPlusAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardPlusAltIcon.displayName = "CreditCardPlusAlt";
var CreditCardPlusAlt_default = CreditCardPlusAltIcon;
export {
  CreditCardPlusAlt_default as default
};
