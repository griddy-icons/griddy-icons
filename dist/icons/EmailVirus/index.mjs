import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EmailVirusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EmailVirusIcon.displayName = "EmailVirus";
var EmailVirus_default = EmailVirusIcon;
export {
  EmailVirus_default as default
};
