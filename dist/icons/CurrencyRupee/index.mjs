import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyRupeeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyRupeeIcon.displayName = "CurrencyRupee";
var CurrencyRupee_default = CurrencyRupeeIcon;
export {
  CurrencyRupee_default as default
};
