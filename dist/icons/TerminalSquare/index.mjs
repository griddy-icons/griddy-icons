import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TerminalSquareIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TerminalSquareIcon.displayName = "TerminalSquare";
var TerminalSquare_default = TerminalSquareIcon;
export {
  TerminalSquare_default as default
};
