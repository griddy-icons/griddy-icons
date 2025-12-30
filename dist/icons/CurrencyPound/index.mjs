import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyPoundIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyPoundIcon.displayName = "CurrencyPound";
var CurrencyPound_default = CurrencyPoundIcon;
export {
  CurrencyPound_default as default
};
