import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HelpSquareIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HelpSquareIcon.displayName = "HelpSquare";
var HelpSquare_default = HelpSquareIcon;
export {
  HelpSquare_default as default
};
