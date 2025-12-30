import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardCheckIcon.displayName = "CreditCardCheck";
var CreditCardCheck_default = CreditCardCheckIcon;
export {
  CreditCardCheck_default as default
};
