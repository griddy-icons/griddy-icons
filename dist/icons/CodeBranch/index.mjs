import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CodeBranchIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CodeBranchIcon.displayName = "CodeBranch";
var CodeBranch_default = CodeBranchIcon;
export {
  CodeBranch_default as default
};
