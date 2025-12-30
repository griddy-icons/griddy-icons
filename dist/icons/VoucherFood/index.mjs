import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VoucherFoodIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VoucherFoodIcon.displayName = "VoucherFood";
var VoucherFood_default = VoucherFoodIcon;
export {
  VoucherFood_default as default
};
