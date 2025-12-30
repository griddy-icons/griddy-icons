import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EmailOpenAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EmailOpenAltIcon.displayName = "EmailOpenAlt";
var EmailOpenAlt_default = EmailOpenAltIcon;
export {
  EmailOpenAlt_default as default
};
