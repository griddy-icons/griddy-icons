import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBasketCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBasketCheckIcon.displayName = "ShoppingBasketCheck";
var ShoppingBasketCheck_default = ShoppingBasketCheckIcon;
export {
  ShoppingBasketCheck_default as default
};
