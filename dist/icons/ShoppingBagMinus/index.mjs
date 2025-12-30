import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBagMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBagMinusIcon.displayName = "ShoppingBagMinus";
var ShoppingBagMinus_default = ShoppingBagMinusIcon;
export {
  ShoppingBagMinus_default as default
};
