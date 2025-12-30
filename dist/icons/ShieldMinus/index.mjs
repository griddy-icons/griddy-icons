import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShieldMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShieldMinusIcon.displayName = "ShieldMinus";
var ShieldMinus_default = ShieldMinusIcon;
export {
  ShieldMinus_default as default
};
