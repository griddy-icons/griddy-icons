import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CodeCommitHorizontalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CodeCommitHorizontalIcon.displayName = "CodeCommitHorizontal";
var CodeCommitHorizontal_default = CodeCommitHorizontalIcon;
export {
  CodeCommitHorizontal_default as default
};
