import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EmailForwardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EmailForwardIcon.displayName = "EmailForward";
var EmailForward_default = EmailForwardIcon;
export {
  EmailForward_default as default
};
