import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardsIcon.displayName = "CreditCards";
var CreditCards_default = CreditCardsIcon;
export {
  CreditCards_default as default
};
