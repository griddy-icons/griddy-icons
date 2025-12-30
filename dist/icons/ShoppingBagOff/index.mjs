import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBagOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBagOffIcon.displayName = "ShoppingBagOff";
var ShoppingBagOff_default = ShoppingBagOffIcon;
export {
  ShoppingBagOff_default as default
};
