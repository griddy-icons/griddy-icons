import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LoyaltyCardAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LoyaltyCardAltIcon.displayName = "LoyaltyCardAlt";
var LoyaltyCardAlt_default = LoyaltyCardAltIcon;
export {
  LoyaltyCardAlt_default as default
};
