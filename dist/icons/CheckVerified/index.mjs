import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CheckVerifiedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CheckVerifiedIcon.displayName = "CheckVerified";
var CheckVerified_default = CheckVerifiedIcon;
export {
  CheckVerified_default as default
};
