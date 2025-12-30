import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HelpOctagonIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HelpOctagonIcon.displayName = "HelpOctagon";
var HelpOctagon_default = HelpOctagonIcon;
export {
  HelpOctagon_default as default
};
