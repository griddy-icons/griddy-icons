import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardOffIcon.displayName = "CreditCardOff";
var CreditCardOff_default = CreditCardOffIcon;
export {
  CreditCardOff_default as default
};
