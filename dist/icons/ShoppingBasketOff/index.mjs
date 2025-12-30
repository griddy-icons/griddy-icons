import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBasketOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBasketOffIcon.displayName = "ShoppingBasketOff";
var ShoppingBasketOff_default = ShoppingBasketOffIcon;
export {
  ShoppingBasketOff_default as default
};
