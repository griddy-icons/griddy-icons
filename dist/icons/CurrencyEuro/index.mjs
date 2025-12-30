import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyEuroIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyEuroIcon.displayName = "CurrencyEuro";
var CurrencyEuro_default = CurrencyEuroIcon;
export {
  CurrencyEuro_default as default
};
