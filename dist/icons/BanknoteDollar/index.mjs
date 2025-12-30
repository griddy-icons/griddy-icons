import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BanknoteDollarIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BanknoteDollarIcon.displayName = "BanknoteDollar";
var BanknoteDollar_default = BanknoteDollarIcon;
export {
  BanknoteDollar_default as default
};
