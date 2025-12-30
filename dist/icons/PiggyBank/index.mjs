import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PiggyBankIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PiggyBankIcon.displayName = "PiggyBank";
var PiggyBank_default = PiggyBankIcon;
export {
  PiggyBank_default as default
};
