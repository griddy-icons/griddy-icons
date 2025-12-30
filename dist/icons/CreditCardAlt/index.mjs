import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardAltIcon.displayName = "CreditCardAlt";
var CreditCardAlt_default = CreditCardAltIcon;
export {
  CreditCardAlt_default as default
};
