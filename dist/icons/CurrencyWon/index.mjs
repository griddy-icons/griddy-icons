import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyWonIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyWonIcon.displayName = "CurrencyWon";
var CurrencyWon_default = CurrencyWonIcon;
export {
  CurrencyWon_default as default
};
