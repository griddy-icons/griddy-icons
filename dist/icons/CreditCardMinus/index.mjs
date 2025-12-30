import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardMinusIcon.displayName = "CreditCardMinus";
var CreditCardMinus_default = CreditCardMinusIcon;
export {
  CreditCardMinus_default as default
};
