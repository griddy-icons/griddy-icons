import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardEditAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardEditAltIcon.displayName = "CreditCardEditAlt";
var CreditCardEditAlt_default = CreditCardEditAltIcon;
export {
  CreditCardEditAlt_default as default
};
