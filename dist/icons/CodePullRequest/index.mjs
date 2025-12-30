import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CodePullRequestIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CodePullRequestIcon.displayName = "CodePullRequest";
var CodePullRequest_default = CodePullRequestIcon;
export {
  CodePullRequest_default as default
};
