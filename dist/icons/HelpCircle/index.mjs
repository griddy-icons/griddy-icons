import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HelpCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HelpCircleIcon.displayName = "HelpCircle";
var HelpCircle_default = HelpCircleIcon;
export {
  HelpCircle_default as default
};
