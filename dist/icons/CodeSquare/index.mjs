import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CodeSquareIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CodeSquareIcon.displayName = "CodeSquare";
var CodeSquare_default = CodeSquareIcon;
export {
  CodeSquare_default as default
};
