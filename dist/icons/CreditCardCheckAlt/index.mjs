import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CreditCardCheckAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CreditCardCheckAltIcon.displayName = "CreditCardCheckAlt";
var CreditCardCheckAlt_default = CreditCardCheckAltIcon;
export {
  CreditCardCheckAlt_default as default
};
