import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyYenIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyYenIcon.displayName = "CurrencyYen";
var CurrencyYen_default = CurrencyYenIcon;
export {
  CurrencyYen_default as default
};
