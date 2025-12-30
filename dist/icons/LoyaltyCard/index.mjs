import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LoyaltyCardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LoyaltyCardIcon.displayName = "LoyaltyCard";
var LoyaltyCard_default = LoyaltyCardIcon;
export {
  LoyaltyCard_default as default
};
