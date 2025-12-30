import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TerminalCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TerminalCircleIcon.displayName = "TerminalCircle";
var TerminalCircle_default = TerminalCircleIcon;
export {
  TerminalCircle_default as default
};
