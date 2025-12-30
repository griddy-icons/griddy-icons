import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TermDepositIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TermDepositIcon.displayName = "TermDeposit";
var TermDeposit_default = TermDepositIcon;
export {
  TermDeposit_default as default
};
