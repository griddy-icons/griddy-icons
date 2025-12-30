import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyBahtIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyBahtIcon.displayName = "CurrencyBaht";
var CurrencyBaht_default = CurrencyBahtIcon;
export {
  CurrencyBaht_default as default
};
