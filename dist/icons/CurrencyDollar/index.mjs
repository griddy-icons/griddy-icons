import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyDollarIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyDollarIcon.displayName = "CurrencyDollar";
var CurrencyDollar_default = CurrencyDollarIcon;
export {
  CurrencyDollar_default as default
};
