import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EmailAlertIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EmailAlertIcon.displayName = "EmailAlert";
var EmailAlert_default = EmailAlertIcon;
export {
  EmailAlert_default as default
};
