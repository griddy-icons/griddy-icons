import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LoyaltyCardBarcodeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LoyaltyCardBarcodeIcon.displayName = "LoyaltyCardBarcode";
var LoyaltyCardBarcode_default = LoyaltyCardBarcodeIcon;
export {
  LoyaltyCardBarcode_default as default
};
