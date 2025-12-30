import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardCancelIcon.displayName = "CreditCardCancel";
var CreditCardCancel_default = CreditCardCancelIcon;
export {
  CreditCardCancel_default as default
};
