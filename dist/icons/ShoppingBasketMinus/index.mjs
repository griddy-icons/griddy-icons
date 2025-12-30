import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBasketMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBasketMinusIcon.displayName = "ShoppingBasketMinus";
var ShoppingBasketMinus_default = ShoppingBasketMinusIcon;
export {
  ShoppingBasketMinus_default as default
};
