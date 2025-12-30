import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShoppingBagCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShoppingBagCheckIcon.displayName = "ShoppingBagCheck";
var ShoppingBagCheck_default = ShoppingBagCheckIcon;
export {
  ShoppingBagCheck_default as default
};
