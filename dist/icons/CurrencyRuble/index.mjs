import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyRubleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyRubleIcon.displayName = "CurrencyRuble";
var CurrencyRuble_default = CurrencyRubleIcon;
export {
  CurrencyRuble_default as default
};
