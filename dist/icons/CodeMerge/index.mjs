import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CodeMergeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CodeMergeIcon.displayName = "CodeMerge";
var CodeMerge_default = CodeMergeIcon;
export {
  CodeMerge_default as default
};
