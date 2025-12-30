import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBasketCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBasketCancelIcon.displayName = "ShoppingBasketCancel";
var ShoppingBasketCancel_default = ShoppingBasketCancelIcon;
export {
  ShoppingBasketCancel_default as default
};
