import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CodeCompareIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CodeCompareIcon.displayName = "CodeCompare";
var CodeCompare_default = CodeCompareIcon;
export {
  CodeCompare_default as default
};
