import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardEditIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardEditIcon.displayName = "CreditCardEdit";
var CreditCardEdit_default = CreditCardEditIcon;
export {
  CreditCardEdit_default as default
};
