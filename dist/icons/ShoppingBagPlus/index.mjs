import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBagPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBagPlusIcon.displayName = "ShoppingBagPlus";
var ShoppingBagPlus_default = ShoppingBagPlusIcon;
export {
  ShoppingBagPlus_default as default
};
