import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CurrencyLiraIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CurrencyLiraIcon.displayName = "CurrencyLira";
var CurrencyLira_default = CurrencyLiraIcon;
export {
  CurrencyLira_default as default
};
