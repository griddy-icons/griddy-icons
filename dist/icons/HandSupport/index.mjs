import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HandSupportIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HandSupportIcon.displayName = "HandSupport";
var HandSupport_default = HandSupportIcon;
export {
  HandSupport_default as default
};
