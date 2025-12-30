import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CodeForkAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CodeForkAltIcon.displayName = "CodeForkAlt";
var CodeForkAlt_default = CodeForkAltIcon;
export {
  CodeForkAlt_default as default
};
