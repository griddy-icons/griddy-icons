import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBagCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBagCancelIcon.displayName = "ShoppingBagCancel";
var ShoppingBagCancel_default = ShoppingBagCancelIcon;
export {
  ShoppingBagCancel_default as default
};
