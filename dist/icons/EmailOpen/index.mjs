import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EmailOpenIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EmailOpenIcon.displayName = "EmailOpen";
var EmailOpen_default = EmailOpenIcon;
export {
  EmailOpen_default as default
};
