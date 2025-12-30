import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyExchangeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyExchangeIcon.displayName = "CurrencyExchange";
var CurrencyExchange_default = CurrencyExchangeIcon;
export {
  CurrencyExchange_default as default
};
