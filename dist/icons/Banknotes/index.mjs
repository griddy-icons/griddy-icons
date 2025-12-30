import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BanknotesIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BanknotesIcon.displayName = "Banknotes";
var Banknotes_default = BanknotesIcon;
export {
  Banknotes_default as default
};
