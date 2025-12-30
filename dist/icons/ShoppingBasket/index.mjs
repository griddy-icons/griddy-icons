import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBasketIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBasketIcon.displayName = "ShoppingBasket";
var ShoppingBasket_default = ShoppingBasketIcon;
export {
  ShoppingBasket_default as default
};
