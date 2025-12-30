import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardPlusIcon.displayName = "CreditCardPlus";
var CreditCardPlus_default = CreditCardPlusIcon;
export {
  CreditCardPlus_default as default
};
